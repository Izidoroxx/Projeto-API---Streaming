import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class AlteraSerieDTO{
    @IsString()
    @Optional()
    @ApiPropertyOptional({
        example: "Vikins",
        description: "Serie sobre Vikins"
    })
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    NOMESERIE: string;

    @IsString()
    @Optional()
    @ApiPropertyOptional({
        example: "Segunda Temporada",
        description: "Estamos na segunda temporada"
    })
    @IsNotEmpty({message: "Temporada não pode ser vazio"})
    TEMPORADA: string;
}