import { Inject, Injectable } from '@nestjs/common';
import { StoreService } from 'src/Store/store.service';
import { getStoreKey } from 'src/constants/method';

@Injectable()
export class PostsService {
  constructor(
    @Inject(getStoreKey('post.json'))
    private readonly storeService: StoreService,
  ) {}

  savePosts(data: any) {
    this.storeService.save(data);
  }
}
