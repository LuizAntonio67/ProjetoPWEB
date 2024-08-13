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
exports.UserController = void 0;
const client_1 = require("@prisma/client");
class UserController {
    findUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const user = yield prisma.user.findUnique({
                where: {
                    id: String(req.params.id)
                }
            });
            if (!user)
                return res.status(404).json({ error: 'User not found' });
            return res.json(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const { name, cpf, email, phone, password } = req.body;
            const user = yield prisma.user.create({
                data: {
                    name,
                    cpf,
                    email,
                    phone,
                    password
                }
            });
            return res.json(user);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const { name, cpf, email, phone, password } = req.body;
            const user = yield prisma.user.update({
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
            });
            return res.json(user);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            yield prisma.user.delete({
                where: {
                    id: String(req.params.id)
                }
            });
            return res.json({ message: 'Product deleted successfully' });
        });
    }
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const users = yield prisma.user.findMany();
            return res.json(users);
        });
    }
}
exports.UserController = UserController;
