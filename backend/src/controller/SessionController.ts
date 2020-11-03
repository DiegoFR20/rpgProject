// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import Users from '../models/Users'

class SessionController {
  async index (req: Request, res: Response) {
    const { email, password } = req.body

    const user = await Users.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Senha ou Incorreta' })
    }

    return res.json({
      user,
      token: user.generateToken()
    })
  }

  async store (req: Request, res: Response) {
    const user = req.body

    try {
      user.password = await bcrypt.hash(user.password, 8)

      await Users.create(user)

      return res.json(user)
    } catch (err) {
      res.json({ err: err, message: 'Valores Inválidos ' })
    }
  }
}

export default new SessionController()
