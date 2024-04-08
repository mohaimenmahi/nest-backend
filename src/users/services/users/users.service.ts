import { Injectable } from '@nestjs/common';
import { CreateUser } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'John Doe', email: 'jd@gmail.com'}]
  fetchUsers() {
    return this.fakeUsers
  }

  createUser(createUser: CreateUser) {
    this.fakeUsers.push(createUser)
    return this.fetchUsers()
  }

  getUserById(id: number) {
    return { id: id, username: 'John Doe', email: 'jd@gmail.com' }
  }
}
