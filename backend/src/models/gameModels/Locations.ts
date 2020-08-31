// eslint-disable-next-line no-unused-vars
import { Schema, model, Document } from 'mongoose'

interface LocationsInterface extends Document {
    name: string,
    brief: string,
    story: string,
    parts?: string,
    characters?: {},
    items?: {},
    npc?: {}
}

const LocationsSchema = new Schema({
  name: String,
  brief: String,
  story: String,
  parts: String,
  characters: {},
  items: {},
  npc: {}
}, {
  timestamps: true
})

export default model<LocationsInterface>('Game', LocationsSchema)
