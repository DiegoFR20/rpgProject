import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    name: string,
    fullName?(): string,
    email: string,
    password: string
}

const UserSchema = new Schema({
  name: String,
  fullName: String,
  email: String,
  password: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('Users', UserSchema)
