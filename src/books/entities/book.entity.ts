import { Document } from "mongoose";

export class Book extends Document{
    readonly name: string;
    readonly price: number;
    readonly year: number;
    readonly authorId: string;
    readonly createdAt: Date
}
