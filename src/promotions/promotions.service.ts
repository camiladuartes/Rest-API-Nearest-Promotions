import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion, PromotionDocument } from './entities/promotion.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

// Provider; injectable as a dependency of another
@Injectable()
export class PromotionsService {
    constructor(@InjectModel(Promotion.name) private promotionModel: Model<PromotionDocument>) {
    }

    create(createPromotionDto: CreatePromotionDto) {
        // Instanciate a comment for object-relational mapping
        const promotion = new this.promotionModel(createPromotionDto);
        return promotion.save();
    }

    findAll() {
        return this.promotionModel.find();
    }

    findOne(id: string) {
        return this.promotionModel.findById(id);
    }

    update(id: string, promotion: UpdatePromotionDto) {
        return this.promotionModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                $set: promotion,
            },
            {
                new: true,
            },
        ).exec();
    }

    remove(id: string) {
        return this.promotionModel.deleteOne({_id: id}).exec();
    }
}