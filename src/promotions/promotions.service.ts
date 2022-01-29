import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from './entities/promotion.entity';

// Provider; injectable as a dependency of another
@Injectable()
export class PromotionsService {
    private readonly promotions: Promotion[] = [];

    create(promotion: CreatePromotionDto): Promotion {
        this.promotions.push(promotion);
        return promotion;
    }

    findAll(): Promotion[] {
        return this.promotions;
    }
}
