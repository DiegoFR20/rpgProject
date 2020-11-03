import { Router } from 'express'

// import authMiddleware from './middleware/auth'
import NpcController from './controller/NpcController'
import GameController from './controller/GameController'
import UserController from './controller/UserController'
import SessionController from './controller/SessionController'

const routes = Router()

routes.get('/session', SessionController.index)
routes.post('/session', SessionController.store)

// routes.use(authMiddleware)

routes.get('/npc', NpcController.index)
routes.post('/npc', NpcController.store)

routes.get('/game', GameController.index)
routes.post('/game', GameController.store)

routes.get('/user', UserController.index)
routes.post('/user', UserController.store)

export default routes
