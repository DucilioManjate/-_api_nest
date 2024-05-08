import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module'; // Importe o módulo de eventos

@Module({
  imports: [EventsModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
