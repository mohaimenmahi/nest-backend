import { Controller, Get, Post, Body, Req, Res, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/services/users/users.service';
import { ValidateCreateUserPipePipe } from 'src/users/pipes/validate-create-user-pipe/validate-create-user-pipe.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers()
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
  @UsePipes(ValidationPipe )
  createUser(@Body(ValidateCreateUserPipePipe) userData: CreateUserDto) {
    return this.userService.createUser(userData)
  }

  // can also use @Req and @Res decorators to access the request and response objects instead of using @Body and DTO

  // @Post('create')
  // createUser(@Req() req: Request, @Res() res: Response) {
  //   console.log(req.body)
  //   res.send('User created')
  // }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) { // @Param('id') id: destructures the id from the params object, @Param() id returns an object id = { id: 2 }
    return this.userService.getUserById(id)
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
