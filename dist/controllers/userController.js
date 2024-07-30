"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetails = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = async (req, res) => {
    const { email, firstname, lastname, phone, password, division, empId } = req.body;
    try {
        const user = await (0, userService_1.createUser)({ email, firstname, lastname, phone, password, division, empId });
        res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.createUser = createUser;
const getUserDetails = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await (0, userService_1.getUserDetails)(email);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getUserDetails = getUserDetails;
