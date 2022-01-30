import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// Swagger Documentation: localhost:3000/api
// API Endpoint: localhost:3000/promotions
/* Before you must install: 
 * Swagger: `$ npm install --save @nestjs/swagger swagger-ui-express`
 * Mongo: `$ npm install --save @nestjs/mongoose mongoose` and https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
 */
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
