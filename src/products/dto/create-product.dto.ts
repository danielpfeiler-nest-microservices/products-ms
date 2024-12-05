import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsString()
    public name: string;

    @IsNumber({
        maxDecimalPlaces: 4,
    })
        
    @Min(1)
    @Type(() => Number)
    public price: number;

    @IsBoolean()
    public available: boolean;

}
