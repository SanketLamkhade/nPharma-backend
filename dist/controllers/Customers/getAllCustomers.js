"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.getAllCustomers = void 0;
const customersService_1 = require("../../services/customersService");
const getAllCustomers = async (req, res) => {
    try {
        const routes = await (0, customersService_1.getAllCustomers)();
        if (routes) {
            res.status(200).json(routes);
        }
        else {
            res.status(404).send('Routes not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getAllCustomers = getAllCustomers;
const message = async (req, res) => {
    try {
        res.send("welcome to npharma");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.message = message;
