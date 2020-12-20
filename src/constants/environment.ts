export enum Environment {
  PRODUCTION = 'PRODUCTION',
  TEST = 'TEST',
  DEV = 'DEV',
  LOCAL = 'LOCAL',
  UNKNOWN = 'UNKNOWN'
}

export const isProduction = process.env.NODE_ENV === 'production' && process.env.ENV === 'production';
export const isTest = process.env.NODE_ENV === 'production' && process.env.ENV === 'test';
export const isDev = process.env.NODE_ENV === 'development' && process.env.ENV === 'dev';
export const isLocal = process.env.NODE_ENV === 'development' && process.env.EVN === 'local';

export const environment: Environment = (() => {
  if (isProduction) {
    return Environment.PRODUCTION;
  }

  if (isTest) {
    return Environment.TEST;
  }

  if (isDev) {
    return Environment.DEV;
  }

  if (isLocal) {
    return Environment.LOCAL;
  }

  return Environment.UNKNOWN;
})();

export const origin: string = (() => {
  switch (environment) {
    case Environment.PRODUCTION:
      return 'https://once.sh';
    case Environment.DEV:
      return 'https://dev.once.sh';
    case Environment.TEST:
      return 'https://test.once.sh';
    case Environment.LOCAL:
    case Environment.UNKNOWN:
    default:
      return 'http://localhost:3000';
  }
})();
