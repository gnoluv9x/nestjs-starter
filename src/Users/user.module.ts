import { Module } from '@nestjs/common';
import { StoreModule } from 'src/Store/store.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [StoreModule.forFeature({ filename: 'user2.json' })],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'USER_STORE',
      useValue: {
        name: 'user',
        token: 'abcd',
      },
    },
  ],
})
export class UserModule {}
