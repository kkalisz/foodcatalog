export type User = {
    id: string;
    email: string;
    name: string;
    role: 'customer' | 'owner' | 'admin';
    createdAt: Date;
    updatedAt: Date;
};
export type UserLogin = {
    email: string;
    password: string;
};