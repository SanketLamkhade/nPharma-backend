import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express();
const port = 4000;
const prisma = new PrismaClient()

app.post('/', async(req, res) => {
  const { email, firstname, lastname, phone, password, division, empId } = req.body;
  try {
  const user = await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      phone,
      password,
      division,
      empId
    },
  });
  res.status(201).json(user);
  console.log(user)
}catch (error) {
  res.status(500).send('Server error');
  console.log(error)
}

});

app.listen(port, () => {
  console.log('Server is running on http://localhost:',port);
});
