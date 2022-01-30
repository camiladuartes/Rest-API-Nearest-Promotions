import { ApiProperty } from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {

    @ApiProperty({
        example: 12,
        description: 'The id of the promotion'
    })
    @Prop()
    id: number;
    
    /**
     * The name of the Promotion object
     * @example Tênis Feminino Nike
     */
    @Prop()
    product: string;

    @ApiProperty({
        example: 'Centauro',
        description: 'The name of this promotion product'
    })
    @Prop()
    store: string;

    @ApiProperty({
        example: 'Midway Mall',
        description: 'The location of this promotion product'

    })
    @Prop()
    location: string;

    @ApiProperty({
        example: 256.30,
        description: 'The current price of this promotion product'

    })
    @Prop()
    price: number;

    @ApiProperty({
        example: 30,
        description: 'The promotion percentage of this product'
    })
    @Prop()
    promoPercentage: number;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);