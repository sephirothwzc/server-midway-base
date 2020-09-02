/*
 * @Author: 吴占超
 * @Date: 2019-05-25 16:44:52
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-09-01 16:48:06
 */
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
} from 'sequelize-typescript';
import FlakeId = require('flake-idgen');
import intformat = require('biguint-format');
const { STRING } = DataType;
const flakeIdgen = new FlakeId({ epoch: 1300000000000 });
import * as _ from 'lodash';

@Table
export class BaseModel extends Model<BaseModel> {
  @Column({
    type: STRING(20),
    primaryKey: true,
    autoIncrement: false,
    defaultValue: () => _.toString(intformat(flakeIdgen.next(), 'dec')),
  })
  id: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt: Date;
}
