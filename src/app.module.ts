import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/product.module';
import { CategoryModule } from './categories/category.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
