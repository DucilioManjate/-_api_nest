import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Event } from '../events/event.entity';

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  localizacao: string;

  @Column()
  contato: string;

  @Column('text')
  descricao: string;

  @OneToMany(() => Event, event => event.house)
  events: Event[];
}
