import { ApiProperty } from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {

    @ApiProperty({
        example: 'adoniran_barbosa',
        description: 'The username'
    })
    @Prop()
    username: string;

    @ApiProperty({
        example: '40bd001563085fc35165329ea1ff5c5ecbdbbeef',
        description: 'The user password'
    })
    @Prop()
    password: string;

    @ApiProperty({
        example: 'Adoniran Barbosa',
        description: 'The name of user'
    })
    @Prop()
    name: string;

    @ApiProperty({
        example: new Date(),
        description: 'The user birthday'
    })
    @Prop()
    birthday: Date; 
}

export const UserSchema = SchemaFactory.createForClass(User);