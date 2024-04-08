import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware for users module')

    const { authorization } = req.headers

    if(!authorization) {
      throw new HttpException('No authorization token', HttpStatus.FORBIDDEN)
    }

    if(authorization === 'abcdefgh') next()
    else throw new HttpException('Invalid authorization token', HttpStatus.FORBIDDEN)
  }
}
