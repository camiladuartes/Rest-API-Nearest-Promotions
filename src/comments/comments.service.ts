import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './entities/comment.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCommentDto } from './dto/update-comment.dto';

// Provider; injectable as a dependency of another
@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
    }

    create(createCommentDto: CreateCommentDto) {
        // Instanciate a comment for object-relational mapping
        const comment = new this.commentModel(createCommentDto);
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