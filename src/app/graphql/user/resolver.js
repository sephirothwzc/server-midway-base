/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 10:52:46
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-16 10:33:03
 */
const resolverUtil = require('../utils/resolver.util');
const { Query, Mutation } = resolverUtil('user');

module.exports = {
  Query,
  Mutation
};
