import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_envio')
export class TipoEnvio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;
}
