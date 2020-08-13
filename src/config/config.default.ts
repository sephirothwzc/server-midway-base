import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597295642493_934';

  // add your config here
  config.middleware = [];

  config.cluster = {
    listen: {
      port: 8090,
      hostname: '0.0.0.0',
    },
  };

  return config;
};
