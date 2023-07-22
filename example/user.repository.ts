import { type User } from './user.service'

export class UserRepository {
  users: User[] = [{ name: 'Gus' }]

  getUsers (): User[] {
    return this.users
  }
}
