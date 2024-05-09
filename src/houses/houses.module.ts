import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { House } from './house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([House])],
  controllers: [HousesController],
  providers: [HousesService],
})
export class HousesModule {}
