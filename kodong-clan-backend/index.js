const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'kodong_klan',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432
});

app.get('/', (req, res) => res.send('Kodong Klan API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));