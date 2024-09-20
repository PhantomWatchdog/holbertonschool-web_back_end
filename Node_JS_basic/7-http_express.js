const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.write('This is the list of our students\n');
      res.write(error.message);
      res.end();
    });
});

app.listen(1245);

module.exports = app;
