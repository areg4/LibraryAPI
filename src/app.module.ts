import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENVS } from './config/config';

@Module({
  imports: [BooksModule, UsersModule, 
    MongooseModule.forRoot(ENVS.MONGOURL, 
      {
        dbName: ENVS.MONGODB_DATABASE
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
