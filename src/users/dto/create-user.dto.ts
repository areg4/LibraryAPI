export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly isAuthor: boolean;
    readonly createdAt: Date;
}
