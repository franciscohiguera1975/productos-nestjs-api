import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/product.module';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TipoEnvioModule } from './tipo-envio/tipo-envio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    UsersModule,
    TipoEnvioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
