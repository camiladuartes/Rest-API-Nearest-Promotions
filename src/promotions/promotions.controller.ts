import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, HttpException } from '@nestjs/common';
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
    @ApiOperation({ summary: 'Filter promotions by price' })
    @ApiResponse({
        status: 200,
        description: 'Filter promotions by price',
        type: Promotion,
    })
    filterPrice(@Query() content: any) {
        let min : number;
        let max : number;
        if(content.min== null){
            min = 0;
        } else {
            min = Number(content.min);
        }

        if(content.max== null){
            max = 0;
        } else {
            max = Number(content.max);
        }
        return this.promotionsService.findByPrice(min, max);
    }

    @Get('filter-distance')
    @ApiOperation({ summary: 'Filter promotions by distance' })
    @ApiResponse({
        status: 200,
        description: 'Filter promotions by distance',
        type: Promotion,
    })
    filterDistance(@Query() content: any) {
        let distance: number;
        let latUser: number;
        let longUser: number;

        if(content.distance == null){
            distance = 0;
        } else{
            distance = Number(content.distance);
        }

        latUser = Number(content.latUser);
        longUser = Number(content.longUser);

        if (distance == 0 || isNaN(distance) || isNaN(latUser)  || isNaN(longUser) ){
            throw new HttpException('Parametters nos acceptable', HttpStatus.NOT_ACCEPTABLE);
        }
        // console.log(min, max, distance, pattern, latUser, longUser);
        return this.promotionsService.findByDistance( distance, latUser, longUser);
    }

    @Get('filter-pattern')
    @ApiOperation({ summary: 'Filter promotions by patern' })
    @ApiResponse({
        status: 200,
        description: 'Filter promotions by patern',
        type: Promotion,
    })
    filterPattern(@Query() content: any) {
        let pattern: string;
        console.log(content.pattern);
        if(content.pattern == undefined){
            new HttpException('Parametters nos acceptable', HttpStatus.NOT_ACCEPTABLE);
        }
        pattern = content.pattern;
        return this.promotionsService.findByPattern(pattern);
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
