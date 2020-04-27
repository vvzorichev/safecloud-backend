import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { File } from '@app/file/entities/file.entity'
import { FileDTO } from '@app/file/file.dto.ts';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
	) {}

	async create(file: FileDTO): Promise<void> {
    await this.filesRepository.save(file);
  }
}