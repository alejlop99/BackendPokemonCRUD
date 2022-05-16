const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");

//Create server instance
const app = express();

// Connection to database
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/pokemon', require('./routes/Routers'));

app.listen(4000, () => {
  console.log('Server Running...');
});
