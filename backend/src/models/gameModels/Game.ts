// eslint-disable-next-line no-unused-vars
import { Schema, model, Document } from 'mongoose'

interface GameInterface extends Document {
  name: string,
  users: [string],
  story: string,
  players: {},
  npcs?: [string],
  sessions?: {},
  enemies?: [string],
  locations?: [string],
  missions?: {}
}

const GameSchema = new Schema({
  name: String,
  users: [String],
  story: String,
  players: { String },
  npcs: [String],
  sessions: { String },
  enemies: [String],
  locations: [String],
  missions: { String }
}, {
  timestamps: true
})

export default model<GameInterface>('Game', GameSchema)
