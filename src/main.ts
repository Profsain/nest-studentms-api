import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation setup with whitelist, forbidNonWhitelisted and transform options
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // swagger documentation setup
  // create swagger config with title, description and version
  const config = new DocumentBuilder()
    .setTitle('Student Management System API')
    .setDescription('School backend systemt for Student management system')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // setup swagger url
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server running on http://localhost:3000`);
  });
}
bootstrap();
