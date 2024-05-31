import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './Posts/posts.module';
import { StudentModule } from './Student/student.module';
import { StoreModule } from './Store/store.module';

@Module({
  imports: [UserModule, PostsModule, StudentModule, StoreModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
