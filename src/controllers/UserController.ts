import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class UserController {

  async findUser(req: Request, res: Response) {
    const prisma = new PrismaClient()
    const user = await prisma.user.findUnique({
      where: {
        id: String(req.params.id)
      }
    })

    if (!user) return res.status(404).json({ error: 'User not found' })

    return res.json(user)
  }

  async createUser(req: Request, res: Response) {
    const prisma = new PrismaClient()
    const { name, cpf, email, phone, password } = req.body

    const user = await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        phone,
        password
      }
    })

    return res.json(user)
  }

  async updateUser(req: Request, res: Response) {
    const prisma = new PrismaClient()
    const { name, cpf, email, phone, password } = req.body

    const user = await prisma.user.update({
      where: {
        id: String(req.params.id)
      },
      data: {
        name,
        cpf,
        email,
        phone,
        password
      }
    })

    return res.json(user)
  }

  async deleteUser(req: Request, res: Response) {
    const prisma = new PrismaClient()
    await prisma.user.delete({
      where: {
        id: String(req.params.id)
      }
    })

    return res.json({ message: 'Product deleted successfully' })
  }

  async listUsers(req: Request, res: Response) {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()

    return res.json(users)
  }
}