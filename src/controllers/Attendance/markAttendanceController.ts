import { Request, Response } from 'express';
import { markAttendance as markAttendanceService, updateLogoutTime } from '../../services/Attendance/markAttendanceService';

export const markAttendance = async (req: Request, res: Response) => {
    const { inTime, outTime, empId, date, empName, status } = req.body;
    console.log('Received markAttendance request:', req.body); // Logging incoming request

    try {
        const user = await markAttendanceService({ inTime, outTime, empId, date, empName, status });
        console.log('Attendance marked successfully:', user); // Logging successful response
        res.status(201).json(user);
    } catch (error) {
        console.error('Error in markAttendance:', error); // Logging errors
        res.status(500).send('Server error');
    }
};

export const logoutAttendance = async (req: Request, res: Response) => {
    const { empId, date, outTime } = req.body;
    console.log('Received logoutAttendance request:', req.body); // Logging incoming request

    try {
        const updatedRecords = await updateLogoutTime(empId, date, outTime);
        console.log('Logout time updated successfully:', updatedRecords); // Logging successful response
        if (updatedRecords.count === 0) {
            return res.status(404).send('Attendance record not found');
        }
        res.status(200).json({ message: 'Logout time updated' });
    } catch (error) {
        console.error('Error in logoutAttendance:', error); // Logging errors
        res.status(500).send('Server error');
    }
};
