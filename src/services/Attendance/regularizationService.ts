import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface markAttendanceInput {
    inTime: string | null;  // Allow null
    outTime: string | null; // Allow null
    empId: string;
    date: string;
    empName: string;
    status: string;
}


export const fetchLastThreeDatesWithMissingTimes = async (empId: string) => {
    console.log('Fetching last 3 dates with missing times for:', empId);

    // Fetch last 3 dates where records exist
    const lastThreeDatesRecords = await prisma.attendance.findMany({
        where: { empId },
        orderBy: { date: 'desc' },
        take: 3,
        select: { date: true }
    });
console.log("lastThreeDatesRecords",lastThreeDatesRecords)
    const lastThreeDates = lastThreeDatesRecords.map(record => record.date);

    // Fetch records with missing times within these dates
    const recordsWithMissingTimes = await prisma.attendance.findMany({
        where: {
            empId,
            date: { in: lastThreeDates },
            OR: [
                { inTime: { equals: null } },
                { outTime: { equals: null } }
            ]
        },
        select: { date: true }
    });

    const datesWithMissingTimes = recordsWithMissingTimes.map(record => record.date);

    // Fetch all possible dates within the range for the employee
    const allDatesInRange = await prisma.attendance.findMany({
        where: {
            empId,
            date: { in: lastThreeDates }
        },
        select: { date: true }
    });

    const existingDates = allDatesInRange.map(record => record.date);

    // Identify dates with no records
    const missingDates = lastThreeDates.filter(date => !existingDates.includes(date));

    // Log the results for debugging
    console.log('Records with Missing Times:', datesWithMissingTimes);
    console.log('Missing Dates:', missingDates);

    return {
        recordsWithMissingTimes: datesWithMissingTimes,
        missingDates
    };
};


export const regularizeAttendanceService = async (data: markAttendanceInput) => {
    console.log('Regularizing attendance for:', data);

    const { empId, date, inTime, outTime, empName, status } = data;

    const existingRecord = await prisma.attendance.findFirst({
        where: { empId, date }
    });

    if (existingRecord) {
        return await prisma.attendance.update({
            where: { id: existingRecord.id },
            data: { inTime, outTime, empName, status }
        });
    } else {
        return await prisma.attendance.create({
            data
        });
    }
};
