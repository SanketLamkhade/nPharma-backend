import { Request, Response } from 'express';
import { getAllCustomers as getAllCustomersService} from '../../services/customersService';

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
      const routes = await getAllCustomersService();
      if (routes) {
        res.status(200).json(routes);
      } else {
        res.status(404).send('Routes not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  export const message = async (req: Request, res: Response) => {
    try {
        res.send("welcome to npharma");
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };