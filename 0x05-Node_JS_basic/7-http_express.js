const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 1245;
const databaseFile = process.argv[2];

// Read file asynchronously
const readFileAsync = (filename) => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});

// Function to parse CSV data and return students
const parseCSV = (data) => {
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = {
    CS: [],
    SWE: [],
  };
  let totalStudents = 0;

  for (const line of lines) {
    const [name, field] = line.split(',');
    if (field && (field.trim() === 'CS' || field.trim() === 'SWE')) {
      students[field.trim()].push(name.trim());
      totalStudents += 1; // updated line
    }
  }

  return {
    total: totalStudents,
    CS: {
      count: students.CS.length,
      list: students.CS.join(', '),
    },
    SWE: {
      count: students.SWE.length,
      list: students.SWE.join(', '),
    },
  };
};

// Express route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Express route for '/students'
app.get('/students', async (req, res) => {
  try {
    const fileData = await readFileAsync(databaseFile);
    const studentsData = parseCSV(fileData);
    const response = `This is the list of our students\nNumber of students: ${studentsData.total}\nNumber of students in CS: ${studentsData.CS.count}. List: ${studentsData.CS.list}\nNumber of students in SWE: ${studentsData.SWE.count}. List: ${studentsData.SWE.list}`;
    res.send(response);
  } catch (error) {
    res.status(500).send('Error reading file');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
