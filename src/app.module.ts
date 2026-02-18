import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [ServicesModule, StudentsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
