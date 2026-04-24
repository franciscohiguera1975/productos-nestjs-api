import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const existente = await this.clienteRepository.findOne({
      where: { email: createClienteDto.email },
    });

    if (existente) {
      throw new ConflictException(
        `Ya existe un cliente con el email ${createClienteDto.email}`,
      );
    }

    const cliente = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({
      where: { isActive: true },
      order: { apellido: 'ASC', nombre: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({ where: { id } });

    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);

    if (updateClienteDto.email && updateClienteDto.email !== cliente.email) {
      const emailEnUso = await this.clienteRepository.findOne({
        where: { email: updateClienteDto.email },
      });
      if (emailEnUso) {
        throw new ConflictException(
          `El email ${updateClienteDto.email} ya está en uso`,
        );
      }
    }

    Object.assign(cliente, updateClienteDto);
    return this.clienteRepository.save(cliente);
  }

  async remove(id: number): Promise<void> {
    const cliente = await this.findOne(id);
    await this.clienteRepository.remove(cliente);
  }

  async deactivate(id: number): Promise<Cliente> {
    const cliente = await this.findOne(id);
    cliente.isActive = false;
    return this.clienteRepository.save(cliente);
  }
}
