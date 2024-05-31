import { Module } from '@nestjs/common';
import { StoreModule } from 'src/Store/store.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  imports: [StoreModule.forFeature({ filename: 'post.json' })],
  providers: [PostsService],
})
export class PostsModule {}
