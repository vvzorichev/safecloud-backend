import { IsString } from 'class-validator';
import { File } from '@app/file/entities/file.entity';

export class FileDTO implements Readonly<FileDTO> {
  @IsString()
  id: string;

  @IsString()
  fileName: string;

  @IsString()
	fileKey: string;

	@IsString()
	filePath: string;

  @IsString()
	fileSize: string;
	
  public static from(dto: Partial<FileDTO>) {
    const file = new FileDTO();
    file.id = dto.id;
    file.fileName = dto.fileName;
    file.fileKey = dto.fileKey;
    file.filePath= dto.filePath;
    file.fileSize = dto.fileSize;
    return file;
  }

  public static fromEntity(entity: File) {
    return this.from({
      id: entity.id,
      fileName: entity.fileName,
      fileKey: entity.fileKey,
      filePath: entity.filePath, 
      fileSize: entity.fileSize
    });
  }

  public toEntity() {
		const file = new File();
		file.id = file.id;
    file.fileName = file.fileName;
    file.fileKey = file.fileKey;
    file.filePath= file.filePath;
    file.fileSize = file.fileSize;
    return file;
  }
}