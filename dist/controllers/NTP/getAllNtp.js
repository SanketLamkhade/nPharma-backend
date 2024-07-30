"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNtp = void 0;
const ntpService_1 = require("../../services/ntpService");
const getAllNtp = async (req, res) => {
    try {
        const ntp = await (0, ntpService_1.getAllNtp)();
        if (ntp) {
            res.status(200).json(ntp);
        }
        else {
            res.status(404).send('Tours not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getAllNtp = getAllNtp;
