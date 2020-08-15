/*
 * @Author: zhanchao.wu 
 * @Date: 2020-08-15 13:35:22 
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-15 22:59:47
 */
const resolverUtil = require('../utils/resolver.util');
const { Query, Mutation } = resolverUtil('user');

module.exports = {
  Query,
  Mutation
};