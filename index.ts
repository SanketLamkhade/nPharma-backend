import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express();
app.use(express.json());
const port = 4000;
const prisma = new PrismaClient()

app.post('/create-user', async(req, res) => {
  const { email, firstname, lastname, phone, password, division, empId } = req.body;
  
  try {
  const user = await prisma.user.create({
    data: {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      password: password,
      division: division,
      empId: empId
    },
  });
  res.status(201).json(user);
}catch (error) {
  res.status(500).send('Server error');
}

});

app.get('/get-user-details', async(req, res) => {
  const { email } = req.body;
  
  try {
  const user = await prisma.user.findUnique({
    where:{
      email: email
    }
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
