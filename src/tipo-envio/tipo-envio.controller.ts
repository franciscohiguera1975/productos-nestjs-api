import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEnvioService } from './tipo-envio.service';
import { CreateTipoEnvioDto } from './dto/create-tipo-envio.dto';
import { UpdateTipoEnvioDto } from './dto/update-tipo-envio.dto';

@Controller('tipo-envio')
export class TipoEnvioController {
  constructor(private readonly tipoEnvioService: TipoEnvioService) {}

  @Post()
  create(@Body() createTipoEnvioDto: CreateTipoEnvioDto) {
    return this.tipoEnvioService.create(createTipoEnvioDto);
  }

  @Get()
  findAll() {
    return this.tipoEnvioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEnvioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEnvioDto: UpdateTipoEnvioDto) {
    return this.tipoEnvioService.update(+id, updateTipoEnvioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEnvioService.remove(+id);
  }
}
