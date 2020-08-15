import { provide, inject } from 'midway';
import { Model, Document } from 'mongoose';
import { ServiceBase } from '../lib/base/service.base';

export interface IRoleService extends RoleService {}

@provide()
export class RoleService extends ServiceBase {
  @inject()
  RoleModel: Model<Document>;

  get Model(): Model<Document, {}> {
    return this.RoleModel;
  }
}
