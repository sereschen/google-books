import ENV from '../env';
import prodConfig from './config.prod';
import devConfig from './config.dev';

let config;

switch (ENV) {
  case 'prod':
    config = prodConfig;
    break;
  case 'dev':
  default:
    config = devConfig;
    break;
}

export default config;
