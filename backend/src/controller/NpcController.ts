import { Request, Response } from 'express'

import Npc from '../models/Npc'

class NpcController {
  public async index (req: Request, res: Response): Promise<Response> {
    const npcs = await Npc.find()

    return res.json(npcs)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const npc = await Npc.create(req.body)

      return res.json(npc)
    } catch (err) {
      res.json({ message: 'Valores inválidos' })
    }
  }
}

export default new NpcController()
