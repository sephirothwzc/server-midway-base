/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 21:38:25
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-16 10:25:52
 */

module.exports = (serviceName) => {
  const getService = async (ctx) => {
    const service = await ctx.requestContext.getAsync(
      `${serviceName}Service`
    );
    if (!service) {
      throw new Error(`[resolver.util] serviceName not find services inject!`);
    }
    return service;
  }
  return {
    getService,
    Query: {
      [serviceName]: async (_root, _args, ctx, _info) => {
        const service = await getService(ctx);
        return service.find(_args);
      }
    },
    Mutation: {
      [`${serviceName}Save`]: async (_root, _args, ctx, _info) => {
        const service = await getService(ctx);
        return service.save(_args.param);
      }
    }
  }
}