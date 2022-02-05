import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vote, VoteSchema } from './entities/vote.entity';
import { UsersService } from 'src/users/users.service';
import { UsersController } from 'src/users/users.controller';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Promotion, PromotionSchema } from 'src/promotions/entities/promotion.entity';
import { PromotionsController } from 'src/promotions/promotions.controller';
import { PromotionsService } from 'src/promotions/promotions.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Promotion.name, schema: PromotionSchema }]),
  ],
  controllers: [VotesController, UsersController, PromotionsController],
  providers: [VotesService, UsersService, PromotionsService]
})
export class VotesModule {}
