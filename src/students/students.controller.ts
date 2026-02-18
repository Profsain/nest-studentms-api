import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

// Controller for managing students, with endpoints for CRUD operations and course enrollment
@Controller('students')
export class StudentsController {
  // Inject the StudentsService to handle business logic
  constructor(private readonly studentsService: StudentsService) {}

  // Endpoint to create a new student
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  // Endpoint to get all students
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  // Endpoint to get a student by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  // Endpoint to update a student by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  // Endpoint to delete a student by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  // Endpoint to enroll a student in a course
  @Post(':id/enroll')
  enrollCourse(@Param('id') id: string, @Body('courseId') courseId: string) {
    return this.studentsService.enrollCourse(id, courseId);
  }

  // Endpoint to unenroll a student from a course
  @Post(':id/unenroll')
  unenrollCourse(@Param('id') id: string, @Body('courseId') courseId: string) {
    return this.studentsService.unenrollCourse(id, courseId);
  }
}
