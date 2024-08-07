import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface markAttendanceInput {
    inTime: string; 
    outTime: string; 
    empId: string; 
    date: string; 
    empName: string; 
    status: string; 
}

export const markAttendance = async (data: markAttendanceInput) => {
    console.log('Marking attendance with data:', data); // Logging the data to be saved
    return await prisma.attendance.create({
        data
    });
};

export const updateLogoutTime = async (empId: string, date: string, outTime: string) => {
    console.log('Updating logout time for:', { empId, date, outTime }); // Logging the data to be updated
    return await prisma.attendance.updateMany({
        where: { empId, date },
        data: { outTime }
    });
};
