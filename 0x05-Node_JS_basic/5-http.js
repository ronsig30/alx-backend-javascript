const http = require('http');
const { readFile } = require('fs');
const { promisify } = require('util');

// Promisified readFile for async file reading
const readFileAsync = promisify(readFile);

const countStudents = async (path) => {
  try {
    const data = await readFileAsync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const headers = lines.shift().split(',');
    const students = lines.map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, idx) => {
        // eslint-disable-next-line no-param-reassign
        obj[header] = values[idx];
        return obj;
      }, {});
    });

    const fields = students.reduce((acc, student) => {
      const { field } = student;
      if (!acc[field]) acc[field] = [];
      acc[field].push(student.firstname);
      return acc;
    }, {});

    let output = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const dbPath = process.argv[2];
      if (!dbPath) throw new Error('Database path not provided');
      const studentData = await countStudents(dbPath);
      res.end(studentData);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
