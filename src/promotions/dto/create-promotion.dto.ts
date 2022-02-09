import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsDefined, IsInt, IsNotEmptyObject, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CreateVoteDto } from 'src/votes/dto/create-vote.dto';
import { Vote } from 'src/votes/entities/vote.entity';


// Data Transfer Object; maps and validates data received from post http request
export class CreatePromotionDto {
  
  @IsString()
  readonly product: string;

  @IsString()
  readonly store: string;

  @IsString()
  readonly location: string;

  @IsNumber()
  readonly lat: number;

  @IsNumber()
  readonly long: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly promoPercentage: number;

  @IsInt()
  readonly votes: number;

  @IsBoolean()
  readonly active: boolean;
  
  @IsDate()
  @Type(() => Date)
  readonly dateCreated: Date;

  @IsDefined()
  @IsNotEmptyObject() 
  @ValidateNested({ each: true })  
  voto:  [Vote];

  

}