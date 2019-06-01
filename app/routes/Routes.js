import express from 'express'
import * as controller from '../../app/controllers/UserController'

const route = express.Router()

route.route('/user').get(controller.getUsers)
route.route('/user').post(controller.addUsers)
route.route('/user/:id').put(controller.updateUser)
route.route('/user/:id').get(controller.getUser)
route.route('/user/:id').delete(controller.deleteUser)

export default route

