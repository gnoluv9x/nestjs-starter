import { Inject, Injectable } from '@nestjs/common';
import { StoreService } from 'src/Store/store.service';
import { getStoreKey } from 'src/constants/method';

@Injectable()
export class StudentService {
  constructor(
    @Inject(getStoreKey('student.json'))
    private readonly storeService: StoreService,
  ) {}

  saveStudent(data: any) {
    this.storeService.save(data);
  }
}
