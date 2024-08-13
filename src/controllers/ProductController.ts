import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class ProductController {
    async findProduct(req: Request, res: Response) {
        const prisma = new PrismaClient()
        const product = await prisma.product.findUnique({
            where: {
                id: String(req.params.id)
            }
        })

        if (!product) return res.status(404).json({ error: 'Product not found' })

        return res.json(product)
    }

    async createProduct(req: Request, res: Response) {
        const prisma = new PrismaClient()
        const { name, description, category, price } = req.body

        const product = await prisma.product.create({
            data: {
                name,
                description,
                category,
                price
            }
        })

        return res.json(product)
    }

    async updateProduct(req: Request, res: Response) {
        const prisma = new PrismaClient()
        const { name, description, category, price } = req.body

        const product = await prisma.product.update({
            where: {
                id: String(req.params.id)
            },
            data: {
                name,
                description,
                category,
                price
            }
        })

        return res.json(product)
    }

    async deleteProduct(req: Request, res: Response) {
        const prisma = new PrismaClient()
        await prisma.product.delete({
            where: {
                id: String(req.params.id)
            }
        })

        return res.json({ message: 'Product deleted successfully' })
    }

    async listProducts(req: Request, res: Response) {
        const prisma = new PrismaClient()
        const products = await prisma.product.findMany()

        return res.json(products)
    }
}