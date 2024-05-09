import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Event } from '../events/event.entity';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  genero: string;

  @Column()
  contato: string;

  @Column('text')
  biografia: string;

  @Column()
  videos: string;

  @Column()
  imagens: string;

  @OneToMany(() => Event, event => event.artist)
  events: Event[];
}
