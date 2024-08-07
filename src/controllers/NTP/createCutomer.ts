import { Request, Response } from 'express';
import { createNewCustomer as createNewCustomerService } from '../../services/newCustomerService';

export const createCustomer = async (req: Request, res: Response) => {
    const { route, customerName, dob, phone, address, category } = req.body;

    try {
        const user = await createNewCustomerService({ route, customerName, dob, phone, address, category });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};