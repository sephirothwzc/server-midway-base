import { ServiceBase } from '../lib/base/service.base';
import { Model, Document } from 'mongoose';
import { provide, inject } from 'midway';

export interface IPermissionsService extends PermissionsService {}

@provide()
export class PermissionsService extends ServiceBase {
  @inject()
  permissionsModel: Model<Document>;

  get Model(): Model<Document, {}> {
    return this.permissionsModel;
  }
}
