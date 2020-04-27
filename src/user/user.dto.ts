import { IsString } from 'class-validator';
import { User } from '@app/user/entities/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

	@IsString()
	masterkey: string;

  @IsString()
	authsequence: string;
	
  public static from(dto: Partial<UserDTO>) {
    const user = new UserDTO();
    user.id = dto.id;
    user.name = dto.name;
    user.password = dto.password;
    user.masterkey = dto.masterkey;
    user.authsequence = dto.authsequence;
    return user;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      name: entity.name,
      password: entity.password,
      masterkey: entity.masterkey, 
      authsequence: entity.authsequence,
    });
  }

  public toEntity() {
		const user = new User();
		user.id = this.id;
    user.name = this.name;
    user.password = this.password;
    user.masterkey = this.masterkey;
    user.authsequence = this.authsequence;
    return user;
  }
}