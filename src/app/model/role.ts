/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 13:37:16
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-15 13:37:36
 */
import { Application } from 'midway';

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // const conn = app.mongooseDB.get('db1');

  const roleSchema = new Schema({
    roleName: { type: String },
    roleCode: { type: String },
  });
  return mongoose.model('role', roleSchema);
  // return conn.model('user', userSchema);
};
