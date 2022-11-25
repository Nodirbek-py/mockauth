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
