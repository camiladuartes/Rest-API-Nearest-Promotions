import { ApiProperty } from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoteDocument = Vote & Document;

@Schema()
export class Vote {

    @ApiProperty({
        example: '61f9e8099355d985b20f8347',
        description: 'User\'s id'
    })
    @Prop()
    idUser: string;

    @ApiProperty({
        example: '61f9e8099355d985b20f8347',
        description: 'Promotion\s id'
    })
    @Prop()
    idPromotion: string;

    @ApiProperty({
        example: true,
        description: 'The vote feedback'

    })
    @Prop()
    positive: boolean;

    @ApiProperty({
        example: new Date(),
        description: 'The date of creation of the vote'
    })
    @Prop()
    dateCreated: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);