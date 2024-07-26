import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ntpInput {
    date: string;
    station: string;
    tpName: string;
    tpType: string;
    startTime: string;
    endTime: string;
    place: string;
    empId: number;
    route: string;
    pob: number;
    doctorIds: string[];
}

export const createNtp = async (data: ntpInput) => {
  return await prisma.createNTP.create({
    data
  });
};

export const getAllNtp = async () => {
  return await prisma.createNTP.findMany();
};
  
export const getAllRoutes = async () => {
  return await prisma.routes.findMany();
};

export const getRouteWiseCustomer = async (route: string) => {
  return await prisma.customers.findMany({
    where: { route }
  });
};