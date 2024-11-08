const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const personajes = await (await fetch('https://dragonball-api.com/api/characters?limit=60')).json();
  res.json(personajes);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
