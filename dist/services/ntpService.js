"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouteWiseCustomer = exports.getAllRoutes = exports.getAllNtp = exports.createNtp = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createNtp = async (data) => {
    return await prisma.createNTP.create({
        data
    });
};
exports.createNtp = createNtp;
const getAllNtp = async () => {
    return await prisma.createNTP.findMany();
};
exports.getAllNtp = getAllNtp;
const getAllRoutes = async () => {
    return await prisma.routes.findMany();
};
exports.getAllRoutes = getAllRoutes;
const getRouteWiseCustomer = async (route) => {
    return await prisma.customers.findMany({
        where: { route }
    });
};
exports.getRouteWiseCustomer = getRouteWiseCustomer;
