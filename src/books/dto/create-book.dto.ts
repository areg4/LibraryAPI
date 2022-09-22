export class CreateBookDto {
    readonly name: string;
    readonly price: number;
    readonly year: number;
    readonly authorId: string;
    readonly createdAt: Date
}
