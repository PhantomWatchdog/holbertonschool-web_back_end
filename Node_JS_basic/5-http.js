const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end(); // Ensure the response ends here
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const path = process.argv[2];
      const data = await countStudents(path);
      res.write(data);
      res.end(); // Ensure the response ends here after writing data
    } catch (error) {
      res.end(error.message); // Ensure the response ends here if there's an error
    }
  } else {
    res.end('Not Found'); // Ensure the response ends for other routes
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
