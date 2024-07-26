import { Request, Response } from 'express';
import { createNtp as createNtpService, getAllNtp as getNtpService, getAllRoutes as getAllRoutesService} from '../../services/ntpService';

export const getAllRoutes = async (req: Request, res: Response) => {
    try {
      const routes = await getAllRoutesService();
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