import { Module } from '@nestjs/common';
import { Comment, CommentSchema } from './entities/comment.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    ],
    controllers: [CommentsController],
    providers: [CommentsService],
})
export class CommentsModule {}
