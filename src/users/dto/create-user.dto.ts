import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly username: string;
  
    @IsString()
    readonly password: string;
  
    @IsString()
    readonly name: string;
    
    @IsDate()
    @Type(() => Date)
    readonly birthday: Date;
}
