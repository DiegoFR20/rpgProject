// eslint-disable-next-line no-unused-vars
import { Schema, model, Document } from 'mongoose'

interface ItemsInterface extends Document {
  name: string,
  brief: string,
  story: string,
  locations?: {},
}

const ItemsSchema = new Schema({
  name: String,
  brief: String,
  story: String,
  location: { String }
}, {
  timestamps: true
})

export default model<ItemsInterface>('Game', ItemsSchema)
