import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';

// DTO for updating a student, extending the CreateStudentDto with PartialType to make all fields optional
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
