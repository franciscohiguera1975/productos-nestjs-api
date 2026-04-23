import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Puedes cambiar a 'mysql', 'mongodb', etc.
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  entities: [Product],
  synchronize: true, // ¡Cuidado! Usar en desarrollo, no en producción.
};
