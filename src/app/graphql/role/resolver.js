/*
 * @Author: zhanchao.wu 
 * @Date: 2020-08-15 13:35:22 
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-16 10:37:02
 */
const resolverUtil = require('../utils/resolver.util');
const { Query, Mutation, getService } = resolverUtil('role');

module.exports = {
  Query,
  Mutation,
  User: {
    roles: async (_root, _args, ctx, _info) => {
      console.log(_root);
      const service = await getService(ctx);
      return service.findByUserId(_root, _args);
    }
  }
};