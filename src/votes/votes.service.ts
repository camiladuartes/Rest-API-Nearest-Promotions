import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote, VoteDocument } from './entities/vote.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { PromotionsService } from 'src/promotions/promotions.service';

@Injectable()
export class VotesService {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>, private readonly userService: UsersService, private readonly promotionService: PromotionsService) {
  }

  async create(createVoteDto: CreateVoteDto) {
    const vote = new this.voteModel(createVoteDto);
    const user = await this.userService.findOne(vote.idUser);
    const promotion = await this.promotionService.findOne(vote.idPromotion);
    // Verificar se o user está cadastrado ou n
    if (user == null){
       throw new HttpException('User not found', HttpStatus.NOT_ACCEPTABLE);
    }
    if (promotion == null){
      throw new HttpException('Promotion not found', HttpStatus.NOT_ACCEPTABLE);
   }
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
