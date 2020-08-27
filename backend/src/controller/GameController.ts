import { Request, Response } from 'express'

import Game from '../models/Game'

class GameController {
  public async index (req: Request, res: Response): Promise<Response> {
    const games = await Game.find()

    return res.json(games)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const game = await Game.create(req.body)

      return res.json(game)
    } catch (err) {
      res.json({ message: 'Valores inválidos' })
    }
  }
}

export default new GameController()
