import { provide, inject } from 'midway';
import { IUserService, IUserOptions } from '../interface';
// import { ServiceBase } from '../lib/base/service.base';
import { Model, Document } from 'mongoose';

@provide('userService')
export class UserService implements IUserService {
  @inject()
  UserModel: Model<Document>;

  async getUser(options: IUserOptions): Promise<any> {
    return this.UserModel.find();
  }
}
