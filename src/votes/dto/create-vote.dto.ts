import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateVoteDto {

    @IsNotEmpty()
    @IsString()
    readonly idUser: string;
  
    @IsNotEmpty()
    @IsString()
    readonly idPromotion: string;
  
    @IsBoolean()
    @IsNotEmpty()
    readonly positive: boolean;
    
    
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    readonly dateCreated: Date;

}
  