import { Module } from '@nestjs/common';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';
import { Promotion, PromotionSchema } from './entities/promotion.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Promotion.name, schema: PromotionSchema }]),
    ],
    controllers: [PromotionsController],
    providers: [PromotionsService],
})
export class PromotionsModule {}
