import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote, VoteDocument } from './entities/vote.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { isEmpty } from 'class-validator';

@Injectable()
export class VotesService {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>, private readonly userService: UsersService) {
  }

  create(createVoteDto: CreateVoteDto) {
    const vote = new this.voteModel(createVoteDto);
    const user = this.userService.findOne(vote.idUser);
    // Verificar se o user está cadastrado ou n
    return user.count();
    return vote.save();
  }

  findAll() {
    return this.voteModel.find();
  }

  findOne(id: string) {
    return this.voteModel.findById(id);
  }

  update(id: string, updateVoteDto: UpdateVoteDto) {
    return this.voteModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateVoteDto,
      },
      {
        new: true,
      },
    ).exec();
  }

  remove(id: string) {
    return this.voteModel.deleteOne({_id: id}).exec();
  }
}
