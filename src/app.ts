/*
 * @Author: 吴占超
 * @Date: 2019-05-25 09:56:11
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-09-01 16:59:25
 */
import { Application } from 'midway-web';
import * as _ from 'lodash';
import { IDBContext } from './lib/models/db';
// import { DB } from './lib/models/db';

class AppBootHook {
  constructor(app: Application) {
    this.app = app;
  }
  private app: Application;

  async didLoad() {
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
    const models = _.get(this.app, 'model');
    _.keys(models).forEach((p: string) => {
      this.app.applicationContext.registerObject(
        `${_.camelCase(p)}Model`,
        models[p]
      );
    });
  }

  async willReady() {
    const listen = this.app.config.cluster.listen;
    const uri = `http://${listen.hostname}:${listen.port}`;
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
    const db: IDBContext = await this.app.applicationContext.getAsync('DB');
    await db.init();

    console.log(`✅  ${uri}`);
    console.log(`✅  ${uri}/graphql`);
  }
}

module.exports = AppBootHook;
