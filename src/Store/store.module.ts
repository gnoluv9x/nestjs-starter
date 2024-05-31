import { DynamicModule, Module } from '@nestjs/common';
import {
  DEFAULT_DIRNAME,
  DEFAULT_FILENAME,
  STORE_ROOT_KEY,
} from 'src/constants';
import { getStoreKey } from 'src/constants/method';
import {
  IStoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from 'src/interface';
import { StoreService } from './store.service';

let rootConfig: IStoreConfig;

@Module({})
export class StoreModule {
  // static register(config: IStoreConfig): DynamicModule {
  //   return {
  //     module: StoreModule,
  //     providers: [
  //       StoreService,
  //       {
  //         provide: 'STORE_CONFIG',
  //         useValue: config,
  //       },
  //     ],
  //     exports: [StoreService],
  //   };
  // }

  static forRoot(config?: StoreRootConfig): DynamicModule {
    rootConfig = this.createConfig(config);

    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: STORE_ROOT_KEY,
          useValue: rootConfig,
        },
      ],
      exports: [STORE_ROOT_KEY],
    };
  }

  static forFeature(config: StoreFeatureConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: getStoreKey(config.filename),
          useFactory: () => {
            const featureConfig = this.createConfig({
              ...rootConfig,
              ...config,
            });
            return new StoreService(featureConfig);
          },
        },
      ],
      exports: [getStoreKey(config.filename)],
    };
  }

  private static createConfig(
    rootConfig?: Partial<IStoreConfig>,
  ): IStoreConfig {
    return {
      dirname: DEFAULT_DIRNAME,
      filename: DEFAULT_FILENAME,
      ...rootConfig,
    };
  }
}
