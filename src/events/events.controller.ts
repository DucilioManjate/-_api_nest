import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { JwtAuthGuard } from '../auth/auth.guard'; 

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAllEvents(): any[] {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findEventById(@Param('id') id: number): any {
    return this.eventsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard) // Protege esta rota com o JwtAuthGuard
  createEvent(@Body() eventDto: any): any {
    return this.eventsService.create(eventDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) // Protege esta rota com o JwtAuthGuard
  updateEvent(@Param('id') id: number, @Body() eventDto: any): any {
    return this.eventsService.update(id, eventDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) // Protege esta rota com o JwtAuthGuard
  deleteEvent(@Param('id') id: number): any {
    return this.eventsService.delete(id);
  }
}
