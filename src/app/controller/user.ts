import { Context, controller, get, inject, provide, post } from 'midway';
import { IUserService } from '../../service/user';

@provide()
@controller('/user')
export class UserController {
  @inject()
  ctx: Context;

  @inject('userService')
  service: IUserService;

  @get('/:id')
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const user: any = await this.service.getUser({ id });
    this.ctx.body = { success: true, message: 'OK', data: user };
  }

  @post('/')
  async postUser(): Promise<void> {
    this.ctx.body = await this.service.postUser(this.ctx.request.body);
  }
}
