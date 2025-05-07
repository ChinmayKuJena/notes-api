// import {
//   Injectable,
//   CanActivate,
//   ExecutionContext,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { IS_ALLOW_ANONYMOUS_KEY } from 'src/_core/meta/anonymous.meta';
// import { REQ_USER_INFO } from 'src/_core/models';
// import { Request } from 'express';
// import { JwtService } from '@nestjs/jwt';
// import { __AUTH_CONFIG } from '../config';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private reflector: Reflector,
//     private _jwt: JwtService) { }

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const allowAnonymous = this.reflector.getAllAndOverride<boolean>(IS_ALLOW_ANONYMOUS_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);
//     if (allowAnonymous) {
//       // 💡 See this condition
//       return true;
//     }
//     const request = context.switchToHttp().getRequest();
//     // const token = this.extractTokenFromHeader(request);
//     // if (!token) {
//     //   throw new UnauthorizedException();
//     // }
//     // try {
//     //   const userInfo = await this._jwt.verifyAsync(token,
//     //     {
//     //       secret: __AUTH_CONFIG.secret
//     //     }
//     //   )
//     //   // 💡 We're assigning the payload to the request object here
//     //   // so that we can access it in our route handlers
//     //   request[REQ_USER_INFO] = userInfo;
//     // } catch {
//     //   throw new UnauthorizedException();
//     // }
//     request[REQ_USER_INFO] = this.getDemoUserInfo();
//     return true;
//   }

//   private extractTokenFromHeader(request: Request): string | undefined {
//     const [type, token] = request.headers.authorization?.split(' ') ?? [];
//     return type === 'Bearer' ? token : undefined;
//   }

//   private getDemoUserInfo() {
//     return {
//       userId: 1,
//       tenantId: 1,
//       userName: 'Chiku',
//       role: 'admin',
//       roleId: 1,
//       partyId: 21
//     };
//   }
// }
