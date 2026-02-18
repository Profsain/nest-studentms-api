import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// DTO for creating a student with validation rules and swagger documentation
export class CreateStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsInt()
  @Min(5)
  age: number;
}
