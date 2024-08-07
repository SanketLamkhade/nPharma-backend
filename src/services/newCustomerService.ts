import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface newCustomerInput {
  route: string;
  customerName: string;
  dob: string;
  phone: string;
  address: string;
  category: string;
}

export const createNewCustomer = async (data: newCustomerInput) => {
  return await prisma.customers.create({
    data
  });
};
