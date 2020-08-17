import { EggPlugin } from 'midway';

export default {
  static: true, // default is true
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  graphql: {
    enable: true,
    package: 'egg-graphql',
  },
} as EggPlugin;
