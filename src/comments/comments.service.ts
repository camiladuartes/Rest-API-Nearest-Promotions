import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './entities/comment.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { UsersService } from 'src/users/users.service';
import { PromotionsService } from 'src/promotions/promotions.service';

// Provider; injectable as a dependency of another
@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>, private readonly userService: UsersService, private readonly promotionService: PromotionsService) {
    }

    async create(createCommentDto: CreateCommentDto) {
        // Instanciate a comment for object-relational mapping
        const comment = new this.commentModel(createCommentDto);
        const user = await this.userService.findOne(comment.idUser);
        const promotion = await this.promotionService.findOne(comment.idPromotion);
        // Verificar se o user está cadastrado ou n
        if (user == null){
           throw new HttpException('User not found', HttpStatus.NOT_ACCEPTABLE);
        }
        if (promotion == null){
          throw new HttpException('Promotion not found', HttpStatus.NOT_ACCEPTABLE);
       }
        return comment.save();
    }

    findAll() {
        return this.commentModel.find();
    }

    findOne(id: string) {
        return this.commentModel.findById(id);
    }

    update(id: string, comment: UpdateCommentDto) {
        return this.commentModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                $set: comment,
            },
            {
                new: true,
            },
        ).exec();
    }

    remove(id: string) {
        return this.commentModel.deleteOne({_id: id}).exec();
    }
}