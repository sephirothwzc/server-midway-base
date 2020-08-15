import { provide, inject } from 'midway';
import { Model, Document } from 'mongoose';

export interface IRoleService extends RoleService {}

@provide('roleService')
export class RoleService {
  @inject()
  RoleModel: Model<Document>;

  async find(options: any): Promise<any> {
    return this.RoleModel.find();
  }

  async postUser(options: any): Promise<any> {
    return this.RoleModel.create(options);
  }
}
