import { IsBoolean, IsNotEmpty, IsString
  } from 'class-validator';
  import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ProjectsDto } from '@business-rules22/shared/dto';

  
export class ProjectsValidation extends PartialType(ProjectsDto){
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    code?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description?: string;
  }

  export class ProjectsUpdateStatusValidation extends PartialType(ProjectsDto){
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    status?: boolean;
  }