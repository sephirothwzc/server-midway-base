/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-15 22:49:09
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-15 22:50:01
 */
import { Application } from 'midway';

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // const conn = app.mongooseDB.get('db1');

  const permissionsSchema = new Schema({
    name: { type: String },
    code: { type: String },
  });
  return mongoose.model('permissions', permissionsSchema);
  // return conn.model('user', userSchema);
};
