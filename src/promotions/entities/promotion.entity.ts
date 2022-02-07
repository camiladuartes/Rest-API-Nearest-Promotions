import { ApiProperty } from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {

    @ApiProperty({
        example: 'Tênis Nike Royal Court',
        description: 'The promotion product name'
    })
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
        example: -1500,
        description: 'The store latitude'

    })
    @Prop()
    lat: number;

    @ApiProperty({
        example: +350,
        description: 'The store longitude'

    })
    @Prop()
    long: number;

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

    @ApiProperty({
        example: 300,
        description: 'The number of votes for a promotion'
    })
    @Prop()
    votes: number;

    @ApiProperty({
        example: true,
        description: 'The status of the promotion'
    })
    @Prop()
    active: boolean;

    @ApiProperty({
        example: new Date(),
        description: 'The date of creation of the promotion'
    })
    @Prop()
    dateCreated: Date;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);