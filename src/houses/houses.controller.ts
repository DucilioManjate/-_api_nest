import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { HousesService } from './houses.service';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get()
  findAll() {
    return this.housesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.housesService.findOne(+id);
  }

  @Post()
  create(@Body() newHouse: any) {
    return this.housesService.create(newHouse);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedHouse: any) {
    return this.housesService.update(+id, updatedHouse);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.housesService.delete(+id);
  }
}
