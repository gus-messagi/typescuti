import { UserRepository } from './user.repository'

export interface User {
  name: string
}

export class UserService {
  static inject = [UserRepository]

  constructor (private readonly repository: UserRepository) {}

  getUsers (): User[] {
    return this.repository.getUsers()
  }
}
