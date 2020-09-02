/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 10:52:46
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-17 23:20:15
 */
const resolverUtil = require('../utils/resolver.util');
const { Query, Mutation, getService } = resolverUtil('user');

Mutation.login = async (_root, _args, ctx, _info) => {
  const service = await getService(ctx);
  return service.login(_args);
}

module.exports = {
  Query,
  Mutation
};
