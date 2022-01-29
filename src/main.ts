import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// localhost:3000/api
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Automatic generation of API documentation via Swagger
  const config = new DocumentBuilder()
  .setTitle('Nearest Promotions API')
  .setDescription('Find nearest promotions')
  .setVersion('1.0')
  .addTag('promotions')
  .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
