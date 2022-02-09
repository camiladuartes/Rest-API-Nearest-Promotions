import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import {
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { Vote } from './entities/vote.entity';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  @ApiOperation({summary: 'Creates a new vote'})
  @ApiResponse({ 
      status: 201, 
      description: 'Creates a vote.'
  })
  async create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all votes' })
  @ApiResponse({
      status: 200,
      description: 'Returns a list of votes',
      type: Vote,
  })
  findAll() {
    return this.votesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a vote by id' })
  @ApiResponse({
      status: 200,
      description: 'Returns a vote with the specified id',
      type: Vote,
  })
  findOne(@Param('id') id: string) {
    return this.votesService.findOne(id);
  }

  @Get(':promotionId/votes')
  @ApiOperation({ summary: 'Find all votes from a promotion id' })
  @ApiResponse({
      status: 200,
      description: 'Returns all votes of a specified promotion',
      type: Vote,
  })
  async findAllVotesByPromotion(promotionId: string) {
      return this.votesService.findAllByPromotion(promotionId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates a vote by id' })
  @ApiResponse({
      status: 200,
      description: 'Updates a vote',
      type: Vote,
  })
  update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update(id, updateVoteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a vote' })
  @ApiResponse({
      status: 200,
      description: 'Deletes the user with the specified id',
      type: Vote,
  })
  remove(@Param('id') id: string) {
    return this.votesService.remove(id);
  }
}
