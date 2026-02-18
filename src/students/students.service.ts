import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './interfaces/students.interface';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class StudentsService {
  // In-memory array to store students
  private students: Student[] = [];

  // Create a new student
  create(createStudentDto: CreateStudentDto): Student {
    const newStudent: Student = {
      id: randomUUID(),
      ...createStudentDto,
      courses: [], // Initialize courses as an empty array
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.students.push(newStudent);
    return newStudent;
  }

  // Find all students
  findAll(): Student[] {
    return this.students;
  }

  // Find a student by ID
  findOne(id: string): Student {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  // Update a student by ID
  update(id: string, updateStudentDto: UpdateStudentDto): Student {
    const student = this.findOne(id);
    Object.assign(student, updateStudentDto);
    student.updatedAt = new Date();
    return student;
  }

  // Delete a student by ID
  remove(id: string): void {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    this.students.splice(studentIndex, 1);
  }

  // Enroll a student in a course
  enrollCourse(studentId: string, courseId: string): Student {
    const student = this.findOne(studentId);
    student.courses.push(courseId);
    return student;
  }

  // Unenroll a student from a course
  unenrollCourse(studentId: string, courseId: string): Student {
    const student = this.findOne(studentId);
    student.courses = student.courses.filter((c) => c !== courseId);
    return student;
  }
}
