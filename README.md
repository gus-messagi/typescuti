# Typescuti

`Typescuti` is a small dependency injection container for Typescript/JavaScript.

### Motivation

There are some other dependency injection libraries, but many of them are decorator's based. There isn't problem with that, however thinking on architecture, our domain layer shouldn't have external dependencies. Through `Typescuti`, we can inject all dependencies on infrastructure layer.

### Installing

Using NPM: 
```bash
npm install typescuti --save
```
Or using Yarn:
```bash
yarn add typescuti
```

### Usage

```ts
// user.service.ts
import { type  User, UserService } from  './user.service'

export  class  UserController {

	// register classes those should be injected
	static  inject  = [UserService]
	
	constructor (private  readonly  service:  UserService) {}

	getUsers ():  User[] {
		return  this.service.getUsers()
	}
}
```

```ts
// user.controller.ts
import  express  from  'express'
import  *  as  container  from  'typescuti'
import { UserController } from  './user.controller'

const  app  =  express()

// resolve classes
const  userController  =  container.resolve<UserController>(UserController)

app.get('/user', (_, res) => {
	const  response  =  userController.getUsers()
	return  res.send(response)
})

app.listen(3333)
```

Made with 💙 by [Gustavo Messagi](https://www.linkedin.com/in/gustavo-messagi-63470718b/)