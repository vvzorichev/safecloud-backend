import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { File } from '@app/file/entities/file.entity'

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
	) {}

	async create(file: File): Promise<void> {
    await this.filesRepository.save(file);
  }
}