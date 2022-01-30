import { IsInt, IsString } from 'class-validator';

// Data Transfer Object; maps and validates data received from post http request
export class CreatePromotionDto {
  @IsInt()
  readonly id: number;
  
  @IsString()
  readonly product: string;

  @IsString()
  readonly store: string;

  @IsString()
  readonly location: string;

  @IsInt()
  readonly price: number;

  @IsInt()
  readonly promoPercentage: number;
}