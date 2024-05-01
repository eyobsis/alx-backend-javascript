const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Cannot load the database');
    } else {
      const students = data.split('\n').slice(1);
      const studentCount = students.length;
      const fields = {};
      students.forEach((student) => {
        const [_, __, _, field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(_);
      });
      res.send(`This is the list of our students\n`);
      Object.keys(fields).forEach((field) => {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      });
      res.end();
    }
  });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
