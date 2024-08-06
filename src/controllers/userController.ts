import { Request, Response } from 'express';
import { createUser as createUserService, findUserDetails, getUserDetails as getUserDetailsService } from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
  const { email, firstname, lastname, phone, password, division, empId } = req.body;

  try {
    const user = await createUserService({ email, firstname, lastname, phone, password, division, empId });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const getUserDetails = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await getUserDetailsService(email as string);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const findUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await findUserDetails(email as string);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
