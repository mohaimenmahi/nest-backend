import { Controller, Get, Post, Body, Req, Res, Param, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { userName: 'John Doe', email: 'jd@gmail.com' }
  }

  // @Get()
  // getUsers(@Req() req: Request) {
  //   console.log(req.query)
  //   return { userName: 'John Doe', email: 'jd@gmail.com' }
  // }

  // @Get()
  // getUsers(@Query('userId') userId: string) {
  //   console.log(userId)
  //   return { userName: 'John Doe', email: 'jd@gmail.com' }
  // }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return {}
  }

  // can also use @Req and @Res decorators to access the request and response objects instead of using @Body and DTO

  // @Post('create')
  // createUser(@Req() req: Request, @Res() res: Response) {
  //   console.log(req.body)
  //   res.send('User created')
  // }

  @Get(':id')
  getUserById(@Param('id') id: string) { // @Param('id') id: destructures the id from the params object, @Param() id returns an object id = { id: 2 }
    return { userId: id }
  }

  // @Get(':id')
  // getUserById(@Req() req: Request) {
  //   console.log(req.params.id)
  //   return { userId: req.params.id }
  // }


  @Get(':id/:postId')
  getUserAndPostById(@Param('id') userId: string, @Param('postId') postId: string) {
    return { userId, postId }
  }

  // this also works
  // @Get(':id/:postId')
  // getUserAndPostById(@Param() params: any) {
  //   return { userId: params.id, postId: params.postId }
  // }
}
