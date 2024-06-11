require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` });

const express = require('express');
// const cors = require('cors');

const app = express();

const port = process.env.PORT;

// app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

