import { Module } from '@nestjs/common';
import { PromotionsModule } from './promotions/promotions.module';

// API root module; first thing to be called
@Module({
  imports: [PromotionsModule],
})
export class AppModule {}
