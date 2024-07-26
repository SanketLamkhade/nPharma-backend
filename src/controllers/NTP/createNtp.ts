import { Request, Response } from 'express';
import { createNtp as createNtpService} from '../../services/ntpService';

export const createNtp = async (req: Request, res: Response) => {
  const {  date, station, tpName, tpType, startTime, endTime, place, empId, route, pob , doctorIds} = req.body;

  try {
    console.log(doctorIds)
    const user = await createNtpService({ date, station, tpName, tpType, startTime, endTime, place, empId, route, pob, doctorIds});
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};