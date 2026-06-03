"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createrUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../lib/prisma");
const createrUser = async (name, email, password) => {
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await prisma_1.prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
exports.createrUser = createrUser;
const getAllUsers = async () => {
    return await prisma_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
};
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => {
    return await prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
};
exports.getUserById = getUserById;
const updateUser = async (id, data) => {
    const updateUser = await prisma_1.prisma.user.update({
        where: {
            id,
        },
        data
    });
    const { password: _, ...userWithoutPassword } = updateUser;
    return userWithoutPassword;
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    return await prisma_1.prisma.user.delete({
        where: {
            id,
        },
    });
};
exports.deleteUser = deleteUser;
