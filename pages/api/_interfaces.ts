export interface RegisterData {
    username?: string | string[];
    password?: string | string[];
    accessToken?: string;
    refreshToken?: string;
    user?: { username: string };
    message: string;
}

export interface LoginData {
    message: string;
    accessToken?: string;
    refreshToken?: string;
}

export interface RefreshData {
    message: string;
    accessToken?: string;
}

interface Post {
    _id: string;
    title: string;
    body: string;
}

export interface PostsData {
    posts?: Post[];
    message?: string;
}

export interface DecodedToken {
    id: string;
    username: string;
    exp: number;
    iat: number;
    isAdmin: boolean;
}

interface PrivatePeople {
    _id: string;
    firstName: string;
    lastName: string;
    dob: string;
    address: string;
    phoneNumber: string;
    bankAccount: {
        bankName: string;
        iban: string;
        country: string;
    };
}

export interface PrivateData {
    message?: string;
    posts?: PrivatePeople[];
}
