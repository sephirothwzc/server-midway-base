import { provide, inject } from 'midway';
import { Model, Document } from 'mongoose';
import { ServiceBase } from '../lib/base/service.base';

export interface IUserService extends UserService {}

@provide()
export class UserService extends ServiceBase {
  get Model(): Model<Document, {}> {
    return this.UserModel;
  }
  @inject()
  UserModel: Model<Document>;
}
