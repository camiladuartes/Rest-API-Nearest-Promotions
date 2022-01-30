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

    @Patch()
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
