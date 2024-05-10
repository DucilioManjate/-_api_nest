import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { HousesModule } from './houses/houses.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',  // Nome do serviço do contêiner PostgreSQL no docker-compose.yml
      port: 5432,  // Porta padrão do PostgreSQL
      username: 'root',
      password: 'Ducilio199@',
      database: 'vitrin_events',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Define se as entidades devem ser sincronizadas automaticamente com o banco de dados
      logging: false,
    }),
    HousesModule,
    ArtistsModule,
    EventsModule,
  ],
})
export class AppModule {}
