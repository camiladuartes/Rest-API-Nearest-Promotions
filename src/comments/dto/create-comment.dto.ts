import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';


// Data Transfer Object; maps and validates data received from post http request
export class CreateCommentDto {
  
  @IsNotEmpty()
  @IsString()
  readonly idUser: string;

  @IsNotEmpty()
  @IsString()
  readonly idPromotion: string;
  
  @IsDate()
  @Type(() => Date)
  readonly dateCreated: Date;

  @IsDate()
  @IsString()
  readonly message: string;
}
