import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
    message: string;
    accessToken?: string;
    refreshToken?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
    }
    res.status(200).json({ message: 'John Doe' });
}
