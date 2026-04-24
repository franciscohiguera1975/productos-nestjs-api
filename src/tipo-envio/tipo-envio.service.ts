import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoEnvio } from './entities/tipo-envio.entity';
import { CreateTipoEnvioDto } from './dto/create-tipo-envio.dto';
import { UpdateTipoEnvioDto } from './dto/update-tipo-envio.dto';

@Injectable()
export class TipoEnvioService {
  constructor(
    @InjectRepository(TipoEnvio)
    private readonly tipoEnvioRepository: Repository<TipoEnvio>,
  ) {}

  async create(createTipoEnvioDto: CreateTipoEnvioDto): Promise<TipoEnvio> {
    const tipoEnvio = this.tipoEnvioRepository.create(createTipoEnvioDto);
    return this.tipoEnvioRepository.save(tipoEnvio);
  }

  async findAll(): Promise<TipoEnvio[]> {
    return this.tipoEnvioRepository.find();
  }

  async findOne(id: number): Promise<TipoEnvio> {
    const tipoEnvio = await this.tipoEnvioRepository.findOne({ where: { id } });
    if (!tipoEnvio) {
      throw new NotFoundException(`Tipo de Envío con ID ${id} no encontrado`);
    }
    return tipoEnvio;
  }

  async update(id: number, updateTipoEnvioDto: UpdateTipoEnvioDto): Promise<TipoEnvio> {
    const tipoEnvio = await this.findOne(id);
    this.tipoEnvioRepository.merge(tipoEnvio, updateTipoEnvioDto);
    return this.tipoEnvioRepository.save(tipoEnvio);
  }

  async remove(id: number): Promise<void> {
    const tipoEnvio = await this.findOne(id);
    await this.tipoEnvioRepository.remove(tipoEnvio);
  }
}
