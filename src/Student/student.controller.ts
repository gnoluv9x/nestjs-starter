import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentServie: StudentService) {}

  @Post()
  createStudent(@Body() data: any) {
    this.studentServie.saveStudent(data);
    return {
      success: true,
    };
  }
}
