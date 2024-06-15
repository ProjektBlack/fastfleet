// Dependencies
require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` });
const express = require('express');
const cors = require('cors');

const { dbInstance } = require('./utils/database/db_instance.js');

// Initialize server
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Routes
app.use('/drivers', require('./services/drivers/controllers/get.js'));

