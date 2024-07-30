const express = require('express');
const userRoutes = require('./routes/routes');

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
