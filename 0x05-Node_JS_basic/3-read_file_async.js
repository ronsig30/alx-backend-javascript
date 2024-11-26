const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data
          .trim()
          .split('\n')
          .filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        const headers = lines[0].split(',');
        const students = lines.slice(1).map((line) => line.split(','));
        const fieldIndex = headers.indexOf('field');
        const nameIndex = headers.indexOf('firstname');

        if (fieldIndex === -1 || nameIndex === -1) {
          reject(new Error('Invalid database format'));
          return;
        }

        const studentCount = students.length;
        console.log(`Number of students: ${studentCount}`);

        const fields = {};
        students.forEach((student) => {
          const field = student[fieldIndex];
          const name = student[nameIndex];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(name);
        });

        Object.entries(fields).forEach(([field, names]) => {
          console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
          );
        });

        resolve();
      } catch (processingError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
