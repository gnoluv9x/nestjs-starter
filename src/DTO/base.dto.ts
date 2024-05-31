import { Expose, plainToInstance } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export abstract class BaseDTO {
  @IsNotEmpty()
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  static plainToClass<T>(this: new (...args: any[]) => T, obj: T) {
    return plainToInstance(this, obj, {
      excludeExtraneousValues: true,
    });
  }
}
