import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@app/user/entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

// для проверки
	public getAll(): Promise<User[]> {
		return this.usersRepository.find({
      order: {
        createdAt: 'DESC',
			},
		});
	}
	
	async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { userName: username} });
  } 
  async create(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }

	async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}