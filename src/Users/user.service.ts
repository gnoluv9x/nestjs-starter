import { Inject, Injectable } from '@nestjs/common';
import { UserDTO } from 'src/DTO/user.dto';
import { StoreService } from 'src/Store/store.service';
import { getStoreKey } from 'src/constants/method';

@Injectable()
export class UserService {
  constructor(
    @Inject(getStoreKey('user2.json'))
    private storeService: StoreService,
  ) {
    console.log('Debug_here this.storeService: ', this.storeService);
  }

  createUser(user: UserDTO): UserDTO {
    user.createdAt = new Date();
    user.updatedAt = new Date();
    const responseUser = UserDTO.plainToClass(user);
    this.storeService.save(responseUser);

    return responseUser;
  }
}
