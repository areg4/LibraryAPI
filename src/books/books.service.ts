import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

  async create(createBookDto: CreateBookDto) : Promise<Book> {
    const newBook = new this.bookModel(createBookDto);
    return await newBook.save();
  }

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async findOne(id: string) : Promise<Book> {
    const book = await this.bookModel.findById(id);
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto) : Promise<Book>{
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {new:true});
    return updatedBook;
  }

  async remove(id: string) : Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id);
    return deletedBook;
  }
}
