import { type User, UserService } from './user.service'

export class UserController {

  // register classes that should be injected
  static inject = [UserService]

  constructor (private readonly service: UserService) {}

  getUsers (): User[] {
    return this.service.getUsers()
  }
}
