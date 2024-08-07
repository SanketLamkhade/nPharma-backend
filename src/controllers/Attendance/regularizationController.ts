import { Request, Response } from 'express';
import { fetchLastThreeDatesWithMissingTimes,regularizeAttendanceService } from '../../services/Attendance/regularizationService';

export const fetchDatesWithMissingTimes = async (req: Request, res: Response) => {
    const { empId } = req.query;
    console.log('Fetching last 3 dates with missing times for:', empId);

    try {
        const dates = await fetchLastThreeDatesWithMissingTimes(empId as string);
        console.log('Fetched dates with missing times:', dates);
        res.status(200).json(dates);
    } catch (error) {
        console.error('Error in fetchDatesWithMissingTimes:', error);
        res.status(500).send('Server error');
    }
};

export const regularizeAttendance = async (req: Request, res: Response) => {
    const { empId, date, inTime, outTime, empName, status } = req.body;
    console.log('Received regularizeAttendance request:', req.body);

    try {
        const result = await regularizeAttendanceService({ empId, date, inTime, outTime, empName, status });
        console.log('Attendance regularized successfully:', result);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in regularizeAttendance:', error);
        res.status(500).send('Server error');
    }
};
