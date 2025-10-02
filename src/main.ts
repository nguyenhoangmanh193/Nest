import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT')
  if (!port) {
    throw new Error('PORT is variables');
  }

  // Bật ValidationPipe toàn cục
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,             // loại bỏ các field không khai báo trong DTO
      forbidNonWhitelisted: true,  // báo lỗi nếu gửi field không khai báo
      transform: true,             // tự động chuyển types (string => number, date, ...)
      exceptionFactory: (errors) => {
        const messages = errors.map(err => {
          return {
            property: err.property,
            constraints: err.constraints,
          };
        });
        return new BadRequestException({
          statusCode: 400,
          errors: messages,
        });
      },
    }),
  );

  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
