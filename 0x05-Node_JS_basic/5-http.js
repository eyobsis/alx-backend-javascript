const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Cannot load the database\n');
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
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`This is the list of our students\n`);
        Object.keys(fields).forEach((field) => {
          res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
        });
        res.end();
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
