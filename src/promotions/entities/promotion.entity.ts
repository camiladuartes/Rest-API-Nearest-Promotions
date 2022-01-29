import { ApiProperty } from "@nestjs/swagger";

export class Promotion {
    /**
     * The name of the Promotion object
     * @example Tênis Feminino Nike
     */
     product: string;

    @ApiProperty({
        example: 'Centauro',
        description: 'The name of this promotion product'
    })
    store: string;

    @ApiProperty({
        example: 'Midway Mall',
        description: 'The location of this promotion product'

    })
    location: string;

    @ApiProperty({
        example: 256.30,
        description: 'The current price of this promotion product'

    })
    price: number;

    @ApiProperty({
        example: 30,
        description: 'The promotion percentage of this product'
    })
    promoPercentage: number;
}