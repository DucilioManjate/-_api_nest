import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(+id);
  }

  @Post()
  create(@Body() newArtist: any) {
    return this.artistsService.create(newArtist);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedArtist: any) {
    return this.artistsService.update(+id, updatedArtist);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.artistsService.delete(+id);
  }
}
