import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import {File} from "@app/file/entities/file.entity";

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  masterkey: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
	authsequence: string;

	@CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;
	
	@OneToMany(type => File, file => file.user)
    files: File[];
}