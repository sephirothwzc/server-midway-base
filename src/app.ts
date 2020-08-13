/*
 * @Author: 吴占超
 * @Date: 2019-05-25 09:56:11
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-08-13 23:58:16
 */
import { Application } from 'midway-web';
import * as _ from 'lodash';

class AppBootHook {
  constructor(app: Application) {
    this.app = app;
  }
  private app: Application;

  async didLoad() {
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
    const models = _.get(this.app, 'model');
    _.keys(models).forEach((p: string) => {
      this.app.applicationContext.registerObject(`${p}Model`, models[p]);
    });
  }

  async willReady() {
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
  }
}

module.exports = AppBootHook;
