"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCustomers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllCustomers = async () => {
    return await prisma.customers.findMany();
};
exports.getAllCustomers = getAllCustomers;
