import { Schema, model, Document } from 'mongoose'

interface ItemsInterface extends Document {
    name: string,
    brief: string,
    story: string,
    locations: string,
}

const ItemsSchema = new Schema({
  name: String,
  brief: String,
  story: String,
  location: String
}, {
  timestamps: true
})

export default model<ItemsInterface>('Game', ItemsSchema)
