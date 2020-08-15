import { provide, inject } from 'midway';
import { Model, Document } from 'mongoose';

export interface IUserService extends UserService {}

@provide('userService')
export class UserService {
  @inject()
  UserModel: Model<Document>;

  async find(options: any): Promise<any> {
    return this.UserModel.find();
  }

  async postUser(options: any): Promise<any> {
    return this.UserModel.create(options);
  }
}
