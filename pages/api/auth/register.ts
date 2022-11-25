import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

import { userModel } from '../_db';
import { RegisterData } from '../_interfaces';

declare const process: {
    env: {
        JWT_SECRET: string;
        REFRESH_TOKEN_SECRET: string;
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<RegisterData>): Promise<void> {
    return await new Promise((resolve) => {
        if (req.method === 'POST') {
            const { username, password2 } = req.body;
            const data: any = {
                username: [],
                password: [],
            };
            let valid = true;
            for (const key in data) {
                if (req.body[key] === '') {
                    data[key].push('This field may not be blank');
                    valid = false;
                } else if (key === 'username') {
                    if (username.length < 5) {
                        data.username.push('Username must be logner than 5 characters');
                        valid = false;
                    }
                } else if (key === 'password') {
                    if (req.body[key] !== password2) {
                        data.password.push('Passwords are not matching');
                        valid = false;
                    } else if (req.body[key].length <= 8) {
                        data.password.push('Passwords must be longer than 8 characters');
                        valid = false;
                    }
                }
            }
            if (valid) {
                try {
                    void userModel
                        .findOne({ username })
                        .exec()
                        .then((exists) => {
                            if (exists === null) {
                                userModel
                                    .create({
                                        username,
                                        password: bcrypt.hashSync(req.body.password, 10),
                                        isAdmin: false,
                                    })
                                    .then((response) => {
                                        const accessToken = jsonwebtoken.sign(
                                            {
                                                id: response._id,
                                                username: response.username,
                                                isAdmin: response.isAdmin,
                                            },
                                            process.env.JWT_SECRET,
                                            {
                                                expiresIn: '3d',
                                            },
                                        );
                                        const refreshToken = jsonwebtoken.sign(
                                            {
                                                username: response.username,
                                            },
                                            process.env.REFRESH_TOKEN_SECRET,
                                            { expiresIn: '7d' },
                                        );
                                        res.status(201).json({
                                            message: 'User is created successfully',
                                            accessToken,
                                            refreshToken,
                                            user: response.username,
                                        });
                                    })
                                    .catch(() => {
                                        res.writeHead(501, 'Internal error');
                                        res.end();
                                        return resolve();
                                    });
                            } else {
                                res.status(403).json({ message: 'Username is taken, please choose another one' });
                            }
                        });
                } catch (error: any) {
                    res.status(503).json({ message: error });
                }
            } else {
                res.status(400).json({ ...data, message: 'Invalid request body' });
            }
        } else if (req.method === 'GET') {
            res.status(200).json({ message: 'You cannot get anything rahter then this message 😃' });
        } else {
            res.status(501).json({ message: '☹️' });
        }
    });
}
