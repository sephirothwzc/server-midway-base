import { Context } from 'midway';

export const development = {
  watchDirs: [
    'app',
    'lib',
    'service',
    'config',
    'app.ts',
    'agent.ts',
    'interface.ts',
  ],
  overrideDefault: true,
};

export const jwt = {
  secret: '123456',
};

export const mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:27017/midwaybase',
    options: {},
    // mongoose global plugins, expected a function or an array of function and options :createdPlugin, [updatedPlugin, pluginOptions]
    plugins: [],
  },
};

export const graphql = {
  router: '/graphql',
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
  // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
  graphiql: true,
  // 是否设置默认的Query和Mutation, 默认关闭
  defaultEmptySchema: true,
  // graphQL 路由前的拦截器
  onPreGraphQL(ctx: Context) {
    const h = ctx.header;
    console.log(h);
    console.log(`onPreGraphQL`);
  },
  // // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
  async onPreGraphiQL(ctx: Context) {
    const service = await ctx.requestContext.getAsync(`userService`);
    const result = service.login({
      userName: 'admin',
      password: 'admin',
    });
    ctx.response.header['token'] = result.token;
    console.log(ctx.header);
    console.log(`onPreGraphiQL`);
  },
  // // apollo server的透传参数，参考[文档](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#parameters)
  // apolloServerOptions: {
  //   rootValue,
  //   formatError,
  //   formatResponse,
  //   mocks,
  //   schemaDirectives,
  //   introspection,
  //   playground,
  //   debug,
  //   validationRules,
  //   tracing,
  //   cacheControl,
  //   subscriptions,
  //   engine,
  //   persistedQueries,
  //   cors,
  // },
};
