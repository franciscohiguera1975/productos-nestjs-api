import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEnvioDto } from './create-tipo-envio.dto';

export class UpdateTipoEnvioDto extends PartialType(CreateTipoEnvioDto) {}
