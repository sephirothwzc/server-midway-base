import { provide, inject, plugin, config } from 'midway';
import { Model } from 'mongoose';
import { ServiceBase } from '../lib/base/service.base';
import { IUserDoc } from '../app/interfaces/user.doc';
import * as _ from 'lodash';
import * as bcrypt from 'bcryptjs';
import { promisify } from 'util';

export interface IUserService extends UserService {}

@provide()
export class UserService extends ServiceBase {
  get Model(): Model<IUserDoc> {
    return this.userModel;
  }
  @inject()
  userModel: Model<IUserDoc>;

  @plugin()
  jwt: any;

  @config('jwt')
  configJwt: any;

  async login(param: { userName: string; password: string }): Promise<any> {
    const user = await this.Model.findOne({ userName: param.userName });
    const compareAsync = promisify(bcrypt.compare);
    const pwdbool = await compareAsync(
      param.password,
      _.get(user, 'password', '')
    );
    if (pwdbool) {
      return {
        token: this.jwt.sign(
          {
            _id: user._id,
            userName: user.userName,
            exp: Math.floor(Date.now() / 1000) + 60 * 60, // 60 seconds * 60 minutes = 1 hour
          },
          this.configJwt.secret
        ),
        message: user.userName,
      };
    }
    return {
      message: '用户名或密码错误',
    };
  }

  async save(options: any): Promise<any> {
    const hash = promisify(bcrypt.hash);
    options.password = await hash(options.password, 16);
    return super.save(options);
  }
}
