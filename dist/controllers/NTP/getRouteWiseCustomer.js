"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouteWiseCustomer = void 0;
const ntpService_1 = require("../../services/ntpService");
const getRouteWiseCustomer = async (req, res) => {
    const { route } = req.body;
    try {
        const routes = await (0, ntpService_1.getRouteWiseCustomer)(route);
        if (routes) {
            res.status(200).json(routes);
        }
        else {
            res.status(404).send('Customer not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getRouteWiseCustomer = getRouteWiseCustomer;
