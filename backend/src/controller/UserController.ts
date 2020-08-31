// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

import User from '../models/Users'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)

      return res.json(user)
    } catch (err) {
      res.json({ message: 'Valores inválidos' })
    }
  }
}

export default new UserController()
