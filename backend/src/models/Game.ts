import { Schema, model, Document } from 'mongoose'

interface GameInterface extends Document {
  name: string,
  users: [string],
  story: string,
  players: {},
  npcs?: [string],
  sessions?: {},
  enemies?: [string],
  items?: [string],
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
  items: [String],
  locations: [String],
  missions: { String }
}, {
  timestamps: true
})

export default model<GameInterface>('Game', GameSchema)
