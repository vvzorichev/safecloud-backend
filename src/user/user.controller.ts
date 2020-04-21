import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { User } from '@app/user/entities/user.entity';
import { UserService } from '@app/user/user.service';

export const enum Routes {
	BASE = 'mycloud',
	GET_LIST = 'list'
}

@Controller(Routes.BASE)
export class UserController {
	constructor(
		private userService: UserService
	) {}

	@Post()
  create(user: User) {
    this.userService.create(user);
	}
	
	@Get(':id')
	findOne(@Param() params): Promise<User> {
		return this.userService.findOne(params.id);
	}
}