// eslint-disable-next-line no-unused-vars
import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

interface UserInterface extends Document {
  fullName: string,
  email: string,
  password: string,
  checkPassword?(password: string): string,
  generateToken?(): string
}

const UserSchema = new Schema({
  fullName: String,
  email: String,
  password: String
}, {
  timestamps: true
})

UserSchema.methods.checkPassword = function (password: string) {
  return bcrypt.compare(password, this.passwordHash)
}

UserSchema.methods.generateToken = function (): string {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET)
}

export default model<UserInterface>('Users', UserSchema)
