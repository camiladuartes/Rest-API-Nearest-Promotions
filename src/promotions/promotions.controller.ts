import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags
} from '@nestjs/swagger';
import { PromotionsService } from './promotions.service';
import { CreatePromotionDto } from './dto/create-promotion.dto'
import { Promotion } from './entities/promotion.entity';

@ApiBearerAuth()
@ApiTags('promotions')
@Controller('promotions')
export class PromotionsController {
    constructor(private readonly promotionsService: PromotionsService) {}

    @Post()
    @ApiOperation({summary: 'Create promotion'})
    @ApiResponse({ status: 403, description: 'Forbiden.'})
    async create(@Body() createPromotionDto: CreatePromotionDto): Promise<Promotion> {
        return this.promotionsService.create(createPromotionDto);
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The found promotions',
        type: Promotion,
    })
    findAll(): Promotion [] {
        return this.promotionsService.findAll();
    }
}
