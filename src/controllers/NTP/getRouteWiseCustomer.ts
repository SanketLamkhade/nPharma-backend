import { Request, Response } from 'express';
import { getRouteWiseCustomer as getRouteWiseCustomerService} from '../../services/ntpService';

export const getRouteWiseCustomer = async (req: Request, res: Response) => {
    const { route } = req.body;
  
    try {
      const routes = await getRouteWiseCustomerService(route as string);
      if (routes) {
        res.status(200).json(routes);
      } else {
        res.status(404).send('Customer not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };