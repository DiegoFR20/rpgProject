import { Schema, model, Document } from 'mongoose'

interface NpcInterface extends Document {
  name: string,
  bio?: string,
  story: string,
  level?: number,
  stage?: string,
  concept?: string,
  scenario?: string,
  objective?: string,
  cash: number,
  size: number,
  atributes: {
    strength: number,
    agility: number,
    wisdom: number,
    spirit: number,
    vigor: number
  },
  status: {
    movement: number,
    pare: number,
    resistence: number
  },
  hindrances: {},
  edges: {},
  items?: {},
  powers?: {}
}

const NpcSchema = new Schema({
  name: String,
  bio: String,
  story: String,
  level: Number,
  stage: String,
  concept: String,
  scenario: String,
  objective: String,
  cash: Number,
  size: Number,
  atributes: {
    strength: Number,
    agility: Number,
    wisdom: Number,
    spirit: Number,
    vigor: Number
  },
  status: {
    movement: Number,
    pare: Number,
    resistence: Number
  },
  hindrances: { String },
  edges: { String },
  items: { String },
  powers: { String }
}, {
  timestamps: true
})

export default model<NpcInterface>('Npc', NpcSchema)
