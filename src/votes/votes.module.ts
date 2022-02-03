import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vote, VoteSchema } from './entities/vote.entity';
import { UsersService } from 'src/users/users.service';
import { UsersController } from 'src/users/users.controller';
import { User, UserSchema } from 'src/users/entities/user.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [VotesController, UsersController],
  providers: [VotesService, UsersService]
})
export class VotesModule {}
