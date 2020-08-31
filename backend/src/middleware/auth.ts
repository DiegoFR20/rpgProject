// import jwt from 'jsonwebtoken'
// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express'
// import { promisify } from 'util'

export default async function auth (req:Request, res:Response, next:NextFunction) {
  const authHeader = req.headers

  console.log(authHeader)

  //   if (!authHeader) {
  //     return res.status(401).json({ message: 'Token not provided' })
  //   }

  //   const [, token] = authHeader.split(' ')

  //   try {
  //     const decoded = await promisify(jwt.verify)(token)

  //     req.userId = decoded.id

//     return next()
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' })
//   }
}
