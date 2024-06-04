import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './Posts/posts.module';
import { StudentModule } from './Student/student.module';
import { StoreModule } from './Store/store.module';
import { TestModule } from './circularService/test.module';

@Module({
  imports: [
    UserModule,
    PostsModule,
    StudentModule,
    TestModule,
    StoreModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
