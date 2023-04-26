import { ApiUploadDataModule } from '@business-rules22/business-rules2/src/upload-data';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from '../entity/projects.entity';
import { ProjectsController } from './api-projects.controller';
import { ProjectsRepository } from './api-projects.repository';
import { ProjectsService } from './api-projects.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Projects])
    TypeOrmModule.forFeature([Projects, ProjectsRepository]),
    forwardRef(() => ApiUploadDataModule)
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ApiProjectsModule {}