/*
 * @Author: zhanchao.wu 
 * @Date: 2020-08-15 13:35:22 
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-15 13:35:46
 */
module.exports = {
  Query: {
    async role(_root, _args, context, _info) {
      const service = await context.requestContext.getAsync(
        'roleService'
      );
      return service.find(_args);
    },
  },
};