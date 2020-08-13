/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-13 21:34:47
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-13 22:47:04
 */
import { Application } from 'midway';

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // const conn = app.mongooseDB.get('db1');

  const userSchema = new Schema({
    userName: { type: String },
    password: { type: String },
  });
  return mongoose.model('user', userSchema);
  // return conn.model('user', userSchema);
};
