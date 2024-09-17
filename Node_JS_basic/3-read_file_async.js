/*create a function countStudents in the file 3-read_file_async.js

Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!*/

const fs = require('fs');

// Create a function named countStudents
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If there's an error reading the file, reject the promise with an error message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines and filter out any empty lines
      const lines = data.split('\n').filter((line) => line.length > 0);

      // Log the total number of students (excluding the header line)
      console.log(`Number of students: ${lines.length - 1}`);

      // Initialize an object to store students by field
      const fields = {};

      // Process each line (excluding the header line)
      for (const line of lines) {
        const student = line.split(',');

        // Initialize the field array if it doesn't exist
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }

        // Add the student's first name to the field array
        fields[student[3]].push(student[0]);
      }

      // Remove the header field from the fields object
      delete fields.field;

      // Log the number of students in each field and their names
      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      // Resolve the promise with the fields object
      resolve(fields);
    });
  });
}

module.exports = countStudents;
