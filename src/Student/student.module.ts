import { Module } from '@nestjs/common';
import { StoreModule } from 'src/Store/store.module';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [StoreModule.forFeature({ filename: 'student.json' })],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
