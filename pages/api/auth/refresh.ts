import type { NextApiRequest, NextApiResponse } from 'next';
import jsonwebtoken from 'jsonwebtoken';

import { userModel } from '../_db';
import { DecodedToken, RefreshData } from '../_interfaces';

declare const process: {
    env: {
        JWT_SECRET: string;
        REFRESH_TOKEN_SECRET: string;
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<RefreshData>): Promise<void> {
    return await new Promise((resolve) => {
        if (req.method === 'POST') {
            const { refreshToken } = req.body;
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!refreshToken) {
                res.status(400).json({ message: 'Please provide refreshToken' });
            } else {
                try {
                    const decoded = jsonwebtoken.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET) as DecodedToken;
                    userModel
                        .findOne({ username: decoded.username })
                        .then((user) => {
                            const accessToken = jsonwebtoken.sign(
                                { id: user._id, username: user.username, isAdmin: user.isAdmin },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: '3d',
                                },
                            );
                            res.status(201).json({ message: 'Access Token updated', accessToken });
                        })
                        .catch(() => {
                            res.status(501).json({ message: 'Internal server error' });
                            return resolve();
                        });
                } catch (err) {
                    res.status(403).json({ message: 'Token is not valid, try logging in again' });
                }
            }
        } else if (req.method === 'GET') {
            res.status(200).json({ message: 'You cannot get anything rahter then this message 😃' });
        } else {
            res.status(501).json({ message: '☹️' });
        }
    });
}
