"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRoutes = void 0;
const ntpService_1 = require("../../services/ntpService");
const getAllRoutes = async (req, res) => {
    try {
        const routes = await (0, ntpService_1.getAllRoutes)();
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
exports.getAllRoutes = getAllRoutes;
