import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from "@app/user/entities/user.entity";

@Entity({
  name: 'files',
})
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  fileName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  fileKey: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  filePath: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
	fileSize: string;

	@CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updatedAt: Date;
	
	@ManyToOne(type => User, user => user.files)
    user: User;
}