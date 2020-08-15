/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 10:52:46
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-15 13:51:24
 */

module.exports = {
  Query: {
    async user(_root, _args, context, _info) {
      const userService = await context.requestContext.getAsync(
        'userService'
      );
      return userService.find(_args);
    },
  },
};
