/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 10:52:46
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-15 22:59:54
 */
const resolverUtil = require('../utils/resolver.util');
const { Query, Mutation } = resolverUtil('role');

module.exports = {
  Query,
  Mutation
};
