import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { File } from '@app/file/entities/file.entity';
import { FileController } from '@app/file/file.controller';
import { FileService } from '@app/file/file.service';

@Module({
	imports: [TypeOrmModule.forFeature([File])],
	controllers: [FileController],
	providers: [FileService]
})
export class FileModule {}