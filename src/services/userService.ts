import { PrismaClient } from '@prisma/client';
import { Role } from '../types';

const prisma = new PrismaClient();

interface UserInput {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  password: string;
  division: Role;
  empId: number;
}

export const createUser = async (data: UserInput) => {
  return await prisma.user.create({
    data
  });
};

export const getUserDetails = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email }
  });
};
