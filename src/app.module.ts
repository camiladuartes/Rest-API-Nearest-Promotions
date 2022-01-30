import { Module } from '@nestjs/common';
import { PromotionsModule } from './promotions/promotions.module';
import { MongooseModule } from '@nestjs/mongoose';

// API root module; first thing to be called
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    PromotionsModule
  ],
})
export class AppModule {}