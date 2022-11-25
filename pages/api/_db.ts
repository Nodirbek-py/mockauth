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

const bankSchema = new mongoose.Schema({
    bankName: {
        type: String,
        unique: false,
        required: true,
    },
    iban: {
        type: String,
        unique: true,
        required: true,
    },
    country: {
        type: String,
        unique: false,
        required: true,
    },
});

const privateSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            unique: false,
            required: true,
        },
        lastName: {
            type: String,
            unique: false,
            required: true,
        },
        dob: {
            type: String,
            unique: false,
            required: true,
        },
        address: {
            type: String,
            unique: false,
            required: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true,
        },
        bankAccount: {
            type: bankSchema,
            required: true,
        },
    },
    { collection: 'privates' },
);

export const userModel = mongoose.models.User || mongoose.model('User', userSchema);
export const postModel = mongoose.models.Post || mongoose.model('Post', postSchema);
export const privateModel = mongoose.models.Private || mongoose.model('Private', privateSchema);
