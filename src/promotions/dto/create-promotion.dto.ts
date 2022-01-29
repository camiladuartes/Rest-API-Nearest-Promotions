import { IsInt, IsString } from 'class-validator';

export class CreatePromotionDto {
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