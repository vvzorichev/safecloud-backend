import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { User } from '@app/user/entities/user.entity';
import { UserDTO } from '@app/user/user.dto.ts';
import { UserService } from '@app/user/user.service';


export const enum Routes {
	BASE = 'user',
	GET_LIST = 'list'
}

@Controller(Routes.BASE)
export class UserController {
	constructor(
		private userService: UserService
	) {}

	// для проверки
	@Get(Routes.GET_LIST)
	public async getAll(): Promise<UserDTO[]> {
		return await this.userService.getAll()
	}

	@Post()
  create(@Body() user: UserDTO) {
    this.userService.create(user);
	}
	
	@Get(':id')
	findOne(@Param() params): Promise<User> {
		return this.userService.findOne(params.id);
	}
}