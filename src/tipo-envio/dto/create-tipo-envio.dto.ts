import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTipoEnvioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
