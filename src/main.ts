import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle('Projeto Final Bloco 02')
  .setDescription('Projeto Final Bloco 02')
  .setContact("Maria Paula","https://github.com/mpaulas/projeto_final_bloco_02","paulla.ps83@gmail.com")
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();