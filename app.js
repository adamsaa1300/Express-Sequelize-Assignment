const express = require('express');
const app = express();

app.use(express.json());

app.use('/students', require('./routes/studentRoutes'));
app.use('/courses', require('./routes/courseRoutes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});