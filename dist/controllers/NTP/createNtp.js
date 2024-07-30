"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNtp = void 0;
const ntpService_1 = require("../../services/ntpService");
const createNtp = async (req, res) => {
    const { date, station, tpName, tpType, startTime, endTime, place, empId, route, pob, doctorIds } = req.body;
    try {
        const user = await (0, ntpService_1.createNtp)({ date, station, tpName, tpType, startTime, endTime, place, empId, route, pob, doctorIds });
        res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.createNtp = createNtp;
