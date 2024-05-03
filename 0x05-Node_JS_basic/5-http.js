const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const PORT = 1245;
const databaseFile = process.argv[2];

const parseCSV = async (data) => {
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = {
    CS: [],
    SWE: [],
  };

  lines.forEach(line => {
    const [name, field] = line.split(',');
    if (field && (field.trim() === 'CS' || field.trim() === 'SWE')) {
      students[field.trim()].push(name.trim());
    }
  });

  return {
    total: lines.length,
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

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Holberton School!');
    res.end();
  } else if (reqUrl.pathname === '/students') {
    try {
      const fileData = await fs.readFile(databaseFile, 'utf8');
      const studentsData = await parseCSV(fileData);
      const response = `This is the list of our students\nNumber of students: ${studentsData.total}\nNumber of students in CS: ${studentsData.CS.count}. List: ${studentsData.CS.list}\nNumber of students in SWE: ${studentsData.SWE.count}. List: ${studentsData.SWE.list}`;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(response);
      res.end();
    } catch (error) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.write('Error reading file');
      res.end();
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Not Found');
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

