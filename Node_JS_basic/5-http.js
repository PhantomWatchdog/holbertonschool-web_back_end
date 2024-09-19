const http = require('http');
const fs = require('fs');

// Function to read and process the CSV file asynchronously
function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Removing empty lines
      if (lines.length <= 1) {
        reject(new Error('No students in the database'));
        return;
      }

      const studentsByField = {};
      const header = lines[0].split(','); // Assuming the first line is the header

      // Processing the remaining lines (students' data)
      lines.slice(1).forEach((line) => {
        const student = line.split(',');
        if (student.length === header.length) {
          const field = student[3]; // Assuming the field is in the 4th column
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(student[0]); // Assuming the name is in the 1st column
        }
      });

      const output = [];
      output.push(`Number of students: ${lines.length - 1}`);

      for (const field in studentsByField) {
        if (Object.hasOwn(studentsByField, field)) {
          output.push(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
        }
      }

      resolve(output.join('\n'));
    });
  });
}

// Creating the HTTP server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(database)
      .then((result) => {
        res.end(result);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listening on port 1245
app.listen(1245);

// Exporting the app for testing or further use
module.exports = app;
