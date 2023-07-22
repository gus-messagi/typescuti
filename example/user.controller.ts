import { type User, UserService } from './user.service'

export class UserController {
  static inject = [UserService]

  constructor (private readonly service: UserService) {}

  getUsers (): User[] {
    return this.service.getUsers()
  }
}
