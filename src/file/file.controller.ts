import { Controller, Get, Param, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from '@app/file/entities/file.entity';
import { FileService } from '@app/file/file.service';


@Controller()
export class FileController {
	constructor(
		private fileService: FileService
	) {}

	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file) {
		console.log(file);
	}
}