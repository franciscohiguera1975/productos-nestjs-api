import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || 'your_username',
  password: process.env.DB_PASS || 'your_password',
  database: process.env.DB_NAME || 'your_database_name',
  entities: [Product, User],
  synchronize: true, // Solo en desarrollo
};
