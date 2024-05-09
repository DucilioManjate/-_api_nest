import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { House } from '../houses/house.entity';
import { Artist } from '../artists/artist.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => House, house => house.events)
  house: House;

  @ManyToOne(() => Artist, artist => artist.events)
  artist: Artist;

  @Column()
  data: string;

  @Column('text')
  descricao: string;

  @Column()
  status: string;
}
