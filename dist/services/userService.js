"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetails = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = async (data) => {
    return await prisma.user.create({
        data
    });
};
exports.createUser = createUser;
const getUserDetails = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    });
};
exports.getUserDetails = getUserDetails;
