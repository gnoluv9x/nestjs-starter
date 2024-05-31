import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDTO } from 'src/DTO/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  // constructor(private readonly moduleRef: ModuleRef) {}
  constructor(private userService: UserService) {}

  @Get()
  getHello(): string {
    return 'Abcd';
  }

  @Get(':abcd')
  getAnUser(@Param('abcd', ParseIntPipe) id: number): string {
    console.log('Debug_here id: ', id, typeof id);
    return 'An user work';
  }

  @Post()
  createUser(@Body() createUserDto: UserDTO): UserDTO {
    return this.userService.createUser(createUserDto);
  }
}
