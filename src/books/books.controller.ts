import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { idValidate } from 'src/utils/functions';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if(!idValidate(id)) throw new BadRequestException("ID bad format")
    const book = await this.booksService.findOne(id);
    if(!book) throw new NotFoundException("Book not found")
    return book; 
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    if(!idValidate(id)) throw new BadRequestException("ID bad format")
    return await this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(!idValidate(id)) throw new BadRequestException("ID bad format")
    return await this.booksService.remove(id);
  }
}
