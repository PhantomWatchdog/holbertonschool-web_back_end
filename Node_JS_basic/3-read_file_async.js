const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const header = lines.shift();
        const studentsByField = {};
        let totalStudents = 0;

        lines.forEach(line => {
          if (line.trim() !== '') {
            const [firstname, lastname, age, field] = line.split(',');
            if (field) {
              if (!studentsByField[field]) {
                studentsByField[field] = [];
              }
              studentsByField[field].push(firstname);
              totalStudents += 1;
            }
          }
        });

        let result = `Number of students: ${totalStudents}\n`;
        for (const [field, students] of Object.entries(studentsByField)) {
          result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }

        resolve(result.trim());
      }
    });
  });
}

module.exports = countStudents;
