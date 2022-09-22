import { Document } from "mongoose";

export class User extends Document {
    readonly username: string;
    readonly password: string;
    readonly isAuthor: boolean;
    readonly createdAt: Date;
}
