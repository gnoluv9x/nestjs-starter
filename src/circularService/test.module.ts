import { Module } from '@nestjs/common';
import { ChickenService } from './chicken.service';
import { EggService } from './egg.service';

@Module({
  providers: [ChickenService, EggService],
  exports: [ChickenService, EggService],
})
export class TestModule {}
