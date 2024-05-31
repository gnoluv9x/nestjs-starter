import { Inject, Injectable, Optional } from '@nestjs/common';
import * as fs from 'fs';
import { STORE_ROOT_KEY } from 'src/constants';
import { IStoreConfig } from 'src/interface';

@Injectable()
export class StoreService {
  constructor(
    @Optional()
    @Inject(STORE_ROOT_KEY)
    private readonly storeConfig: IStoreConfig,
  ) {
    if (this.storeConfig && !fs.existsSync(this.storeConfig.dirname)) {
      fs.mkdirSync(this.storeConfig.dirname);
    }
  }

  save(data: any): any {
    fs.appendFileSync(
      `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
  }
}
