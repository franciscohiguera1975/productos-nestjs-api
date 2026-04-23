import { Module } from '@nestjs/common';
import { TipoEnvioService } from './tipo-envio.service';
import { TipoEnvioController } from './tipo-envio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEnvio } from './entities/tipo-envio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEnvio])],
  controllers: [TipoEnvioController],
  providers: [TipoEnvioService],
})
export class TipoEnvioModule {}
