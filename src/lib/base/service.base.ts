import { inject, Context } from 'midway';

/*
 * @Author: zhanchao.wu
 * @Date: 2020-08-13 22:48:40
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-13 22:55:52
 */
export class ServiceBase {
  constructor(@inject() ctx: Context) {
    this.model = ctx.model;
  }

  private model: any;

  public get Model() {
    return this.model;
  }
}
