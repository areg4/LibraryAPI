import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENVS } from './config/config';

async function bootstrap() {
  console.log(ENVS)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
