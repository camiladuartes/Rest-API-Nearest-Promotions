import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';
import { PromotionsService } from './promotions.service';
import { CreatePromotionDto } from './dto/create-promotion.dto'
import { UpdatePromotionDto } from './dto/update-promotion.dto'
import { Promotion } from './entities/promotion.entity';

// Receives HTTP request; localhost:3000/promotions
// Maps resource endpoints to a serive method
@Controller('promotions')
export class PromotionsController {
    constructor(private readonly promotionsService: PromotionsService) {}

    @Post()
    @ApiOperation({summary: 'Creates a new promotion'})
    @ApiResponse({ 
        status: 201, 
        description: 'Creates a promotion.'
    })
    async create(@Body() createPromotionDto: CreatePromotionDto) {
        return this.promotionsService.create(createPromotionDto);
    }

    @Get('filter-price')
    @ApiOperation({ summary: 'Filter promotions' })
    @ApiResponse({
        status: 200,
        description: 'Filter promotions with a param',
        type: Promotion,
    })
    filter(@Body() content: any) {
        let min : number;
        let max : number;
        let distance: number;
        let pattern: string;
        let latUser: number;
        let longUser: number;
        if(content.min== null){
            min = 0;
        } else {
            min = content.min;
        }

        if(content.max== null){
            max = 0;
        } else {
            max = content.max;
        }

        if(content.distance == null){
            distance = 0;
        } else{
            distance = content.distance;
        }

        if(content.pattern == null){
            pattern = "";
        } else{
            pattern = content.pattern;
        }

        latUser = content.latUser;
        longUser = content.longUser;

        return this.promotionsService.findByFilters(min, max, distance, pattern, latUser, longUser);
    }

    @Get()
    @ApiOperation({ summary: 'Finds all promotions' })
    @ApiResponse({
        status: 200,
        description: 'Returns a list of promotions',
        type: Promotion,
    })
    findAll() {
        return this.promotionsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a promotion by id' })
    @ApiResponse({
        status: 200,
        description: 'Returns a promotion with the specified id',
        type: Promotion,
    })
    findOne(@Param('id') id: string) {
        return this.promotionsService.findOne(id);
    }

    // @Get(':promotionId/votes')
    // @ApiOperation({ summary: 'Find all votes from a promotion id' })
    // @ApiResponse({
    //     status: 200,
    //     description: 'Returns all votes of a specified promotion',
    //     type: Promotion,
    // })
    // async findAllVotesByPromotion(promotionId: string) {
    //     return this.votesService.findAllByPromotion(promotionId);
    // }

    @Patch(':id')
    @ApiOperation({ summary: 'Updates a promotion by id' })
    @ApiResponse({
        status: 200,
        description: 'Updates a promotion',
        type: Promotion,
    })
    update(@Param('id') id: string, @Body() updatePromotionDto: UpdatePromotionDto) {
        return this.promotionsService.update(id, updatePromotionDto);
    }
    
    @Delete(':id')
    @ApiOperation({ summary: 'Deletes a promotion' })
    @ApiResponse({
        status: 200,
        description: 'Deletes the promotion with the specified id',
        type: Promotion,
    })
    remove(@Param('id') id: string) {
        return this.promotionsService.remove(id);
    }
}
