import express from 'express'
import * as container from 'typescuti/dist'
import { UserController } from './user.controller'

const app = express()

// resolve classes
const userController = container.resolve<UserController>(UserController)

app.get('/user', (_, res) => {
  const response = userController.getUsers()

  return res.send(response)
})

app.listen(3333)
