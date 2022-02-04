import { ApiProperty } from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

    @ApiProperty({
        example: '61f9e8099355d985b20f8347',
        description: 'User\'s id'
    })
    @Prop()
    idUser: string;

    @ApiProperty({
        example: '61f9e8099355d985b20f8347',
        description: 'Promotion\'s id'
    })
    @Prop()
    idPromotion: string;

    @ApiProperty({
        example: new Date(),
        description: 'The date of creation of the comment'
    })
    @Prop()
    dateCreated: Date;

    @ApiProperty({
        example: 'Best SSD brand I have ever used',
        description: 'The message of the comment'
    })
    @Prop()
    message: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);