import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { HousesModule } from './houses/houses.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',  
      port: 3306,
      username: 'root',
      password: 'Ducilio199@',
      database: 'vitrin_events',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }),
    HousesModule,
    ArtistsModule,
    EventsModule,
  ],
})
export class AppModule {}
