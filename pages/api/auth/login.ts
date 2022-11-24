import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { userModel } from '../_db';

interface Data {
    message: string;
    accessToken?: string;
    refreshToken?: string;
}

declare const process: {
    env: {
        JWT_SECRET: string;
        REFRESH_TOKEN_SECRET: string;
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
    return await new Promise((resolve) => {
        if (req.method === 'POST') {
            const { username, password } = req.body;
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!username || !password) {
                res.writeHead(403, 'Invalid request body');
                res.json({ message: 'Please, send needed params' });
            } else {
                void userModel
                    .findOne({ username })
                    .then((user) => {
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        if (!user) {
                            res.status(404).json({ message: 'User with given username not found' });
                        } else {
                            if (!bcrypt.compareSync(password, user.password)) {
                                res.status(401).json({ message: 'Password is incorrect' });
                            } else {
                                const accessToken = jsonwebtoken.sign(
                                    { id: user._id, username: user.username },
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn: '3d',
                                    },
                                );
                                const refreshToken = jsonwebtoken.sign(
                                    { id: user._id, username: user.username },
                                    process.env.REFRESH_TOKEN_SECRET,
                                    { expiresIn: '7d' },
                                );
                                res.status(200).json({
                                    message: 'Welcome',
                                    accessToken,
                                    refreshToken,
                                });
                            }
                        }
                    })
                    .catch(() => {
                        res.writeHead(501, 'Internal server error');
                        res.end();
                        return resolve();
                    });
            }
        } else if (req.method === 'GET') {
            res.writeHead(200, 'OK');
            res.json({ message: 'You cannot get anything rahter then this message 😃' });
        }
    });
}
