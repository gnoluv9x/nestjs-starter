export interface IStoreConfig {
  dirname: string;
  filename: string;
}

export type StoreRootConfig = Pick<IStoreConfig, 'dirname'>;

export type StoreFeatureConfig = Pick<IStoreConfig, 'filename'>;
