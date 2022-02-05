import { Module } from '@nestjs/common';
import { Comment, CommentSchema } from './entities/comment.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Promotion, PromotionSchema } from 'src/promotions/entities/promotion.entity';
import { PromotionsController } from 'src/promotions/promotions.controller';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { PromotionsService } from 'src/promotions/promotions.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Promotion.name, schema: PromotionSchema }]),
    ],
    controllers: [CommentsController, UsersController, PromotionsController],
    providers: [CommentsService, UsersService, PromotionsService],
})
export class CommentsModule {}
