import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion, PromotionDocument } from './entities/promotion.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { latLongDistance } from 'src/utils/utility-functions';

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

    // async findAllVotesByPromotion(promotionId: string) {
    //     // const promotionVotes = await this.votesService.findAllByPromotion(promotionId);
    //     // return promotionVotes;
    //     return this.voteModel.find({idPromotion: promotionId});
    // }

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

    computeVote(id: string, vote: number){
        return this.promotionModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                votes: vote,
            },
            {
                new: true,
            },
        ).exec();
    }

    findByFilters(min: number, max: number, distance: number, pattern: string, latUser: number, longUser: number){
        // if(max != 0){
        //     return this.promotionModel.find({ price: { $gte: min, $lte: max } });
        // } else {
        //     return this.promotionModel.find({ price: { $gte: min } });
        // }
        return latLongDistance(-5.895866971117782, -35.196272682150344, -5.890407764084864,-35.190150219670585);
    }

}