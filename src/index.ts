const express = require('express');
const userRoutes = require('./routes/routes');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "35mb" }));
app.use(cors());
const port = process.env.PORT || 4000;

app.use(express.static("client/build"));

// app.get("*", (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
