import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { Category } from '../categories/entities/category.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  entities: [Product, Category],
  synchronize: true, // Solo en desarrollo
};
