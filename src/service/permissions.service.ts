import { ServiceBase } from '../lib/base/service.base';
import { Model, Document } from 'mongoose';
import { provide, inject } from 'midway';

export interface IPermissionsService extends PermissionsService {}

@provide()
export class PermissionsService extends ServiceBase {
  @inject()
  PermissionsModel: Model<Document>;

  get Model(): Model<Document, {}> {
    return this.PermissionsModel;
  }
}
