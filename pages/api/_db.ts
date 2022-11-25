/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import mongoose, { ConnectOptions } from 'mongoose';

declare const process: {
    env: {
        DB_URL: string;
    };
};

void mongoose
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    .connect(process.env.DB_URL, { useNewUrlParser: true } as ConnectOptions);

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
        },
    },
    { collection: 'users' },
);

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: false,
            required: true,
        },
        body: {
            type: String,
            unique: false,
            required: false,
        },
    },
    { collection: 'posts' },
);

export const userModel = mongoose.models.User || mongoose.model('User', userSchema);
export const postModel = mongoose.models.Post || mongoose.model('Post', postSchema);
