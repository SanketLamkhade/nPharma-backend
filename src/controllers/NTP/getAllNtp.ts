import { Request, Response } from 'express';
import { createNtp as createNtpService, getAllNtp as getNtpService, getAllRoutes as getAllRoutesService} from '../../services/ntpService';

export const getAllNtp = async (req: Request, res: Response) => {
    try {
      const ntp = await getNtpService();
      if (ntp) {
        res.status(200).json(ntp);
      } else {
        res.status(404).send('Tours not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };