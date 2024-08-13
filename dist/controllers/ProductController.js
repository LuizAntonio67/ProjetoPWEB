"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const client_1 = require("@prisma/client");
class ProductController {
    findProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const product = yield prisma.product.findUnique({
                where: {
                    id: String(req.params.id)
                }
            });
            if (!product)
                return res.status(404).json({ error: 'Product not found' });
            return res.json(product);
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const { name, description, category, price } = req.body;
            const product = yield prisma.product.create({
                data: {
                    name,
                    description,
                    category,
                    price
                }
            });
            return res.json(product);
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const { name, description, category, price } = req.body;
            const product = yield prisma.product.update({
                where: {
                    id: String(req.params.id)
                },
                data: {
                    name,
                    description,
                    category,
                    price
                }
            });
            return res.json(product);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            yield prisma.product.delete({
                where: {
                    id: String(req.params.id)
                }
            });
            return res.json({ message: 'Product deleted successfully' });
        });
    }
    listProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const products = yield prisma.product.findMany();
            return res.json(products);
        });
    }
}
exports.ProductController = ProductController;
