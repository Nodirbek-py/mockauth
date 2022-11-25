import type { NextApiRequest, NextApiResponse } from 'next';
import jsonwebtoken from 'jsonwebtoken';

import { postModel } from '../_db';
import { DecodedToken, PostsData } from '../_interfaces';

declare const process: {
    env: {
        JWT_SECRET: string;
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<PostsData>): Promise<void> {
    return await new Promise((resolve) => {
        const token = req.headers.authorization?.split('Bearer ')[1];
        if (token === undefined) {
            res.status(401).json({ message: 'Token is not given or invalid format' });
        } else {
            if (req.method === 'GET') {
                try {
                    const valid = jsonwebtoken.verify(token, process.env.JWT_SECRET) as DecodedToken;
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    if (valid) {
                        postModel
                            .find({})
                            .then((posts) => res.status(200).json({ posts }))
                            .catch(() => res.status(501).json({ message: '☹️' }));
                    }
                } catch (error: any) {
                    res.status(401).json({ message: 'Token is not valid' });
                    return resolve(error);
                }
            } else {
                res.status(501).json({ message: '☹️' });
            }
        }
    });
}
