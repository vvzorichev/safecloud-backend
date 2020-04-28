import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@app/user/entities/user.entity';
import { UserDTO } from '@app/user/user.dto.ts';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

// для проверки
	public async getAll(): Promise<UserDTO[]> {
		return await this.usersRepository.find()
		.then((users) => 
			users.map((user) => UserDTO.fromEntity(user))
		);
	}
	
	async findOne(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { userName: username} });
  } 
  async create(user: UserDTO): Promise<void> {
    await this.usersRepository.save(user);
  }

	async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
	}
}