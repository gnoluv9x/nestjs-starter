import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  createPosts(@Body() data: any) {
    this.postService.savePosts(data);
    return {
      success: true,
    };
  }
}
