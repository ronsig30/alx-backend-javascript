const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8'); // Read the file synchronously

    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(','); // Extract headers
    const students = lines.slice(1).map((line) => line.split(',')); // Extract rows
    const fieldIndex = headers.indexOf('field'); // Find field column index
    const nameIndex = headers.indexOf('firstname'); // Find name column index

    if (fieldIndex === -1 || nameIndex === -1) {
      throw new Error('Invalid database format');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
