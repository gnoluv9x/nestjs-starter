import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from './base.dto';

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsNotEmpty()
  @Expose()
  age: number;

  @IsNotEmpty()
  country: string;

  firstName: string;
  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  fullName: string;
}
