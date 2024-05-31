import { STORE_FEATURE_KEY } from '.';

export function getStoreKey(key: string) {
  return STORE_FEATURE_KEY + '_' + key;
}
