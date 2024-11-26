import express from 'express';
import fs from 'fs';

// Create an Express app
const app = express();

// Function to parse the CSV file and return student data
const getStudentsData = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8').split('\n');
  const students = [];

  // Parse each line in the CSV and skip empty lines
  data.forEach((line, index) => {
    // Skip the header row
    if (index === 0) return;

    const [firstname, lastname, age, field] = line.split(',');

    if (firstname && lastname && age && field) {
      // Clean up any extra spaces and add to students array
      students.push({ name: `${firstname.trim()} ${lastname.trim()}`, field: field.trim() });
    }
  });

  return students;
};

// Route for the root ("/")
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', (req, res) => {
  // Get the student data from the CSV file passed as an argument
  const students = getStudentsData(process.argv[2]);

  const numOfStudents = students.length;
  const csStudents = students.filter((student) => student.field === 'CS');
  const sweStudents = students.filter((student) => student.field === 'SWE');

  // Create the lists for CS and SWE students
  const csNames = csStudents.map((student) => student.name).join(', ');
  const sweNames = sweStudents.map((student) => student.name).join(', ');

  // Format the output according to the requirements
  res.send(`This is the list of our students\nNumber of students: ${numOfStudents}\nNumber of students in CS: ${csStudents.length}. List: ${csNames}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweNames}`);
});

// Export the app
export default app;

// Listen on port 1245
app.listen(1245);
