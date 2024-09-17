/*Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!*/

const fs = require('fs');

// Create a function named countStudents
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines
    const lines = data.trim().split('\n');
    
    // Remove the header line
    const header = lines.shift();
    
    // Initialize a map to store the students by field
    const studentsByField = {};
    let totalStudents = 0;
    
    // Process each line
    lines.forEach(line => {
      if (line.trim() !== '') {
        const [firstname, lastname, age, field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      }
    });
    
    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);
    
    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // If the database is not available, it should throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
