/*
 * @Author: zhanchao.wu
 * @Date: 2020-09-01 14:47:42
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-09-01 14:48:37
 */
import { EggPlugin } from 'midway';

export default {
  static: true, // default is true
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  graphql: {
    enable: true,
    package: 'egg-graphql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
} as EggPlugin;
