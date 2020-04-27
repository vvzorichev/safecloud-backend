import { Module } from '@nestjs/common';
import { LocalStrategy } from '@app/auth/local.strategy';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '@app/auth/auth.service';
import { UserModule } from '@app/user/user.module';

@Module({
	imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}