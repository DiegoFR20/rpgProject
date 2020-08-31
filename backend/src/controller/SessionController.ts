// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import Users from '../models/Users'

class SessionController {
  async store (req: Request, res: Response) {
    const { email, password } = req.body

    const user = await Users.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    return res.json({
      user,
      token: user.generateToken()
    })
  }
}

export default new SessionController()
