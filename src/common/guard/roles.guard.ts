import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserData } from '../../interfaces/user-data.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    // 通过反射获取请求路由是否添加了 @Roles() 注解，如果没有添加，则代表不需要进行认证
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
        return true;
    }

    // 在请求对象中获取 user 对象，此 user 对象是 AuthStrategy 中 validate 方法成功执行后的返回值
    const request = context.switchToHttp().getRequest();
    const user: UserData = request.user;
    if (!user) return false
    if (user.roles.length === 0)  return false
    let isIn = false
    user.roles.forEach(item => {
      if (roles.findIndex(role => role === item) > -1) {
        isIn = true
      }
    })
    return isIn;
  }
}
