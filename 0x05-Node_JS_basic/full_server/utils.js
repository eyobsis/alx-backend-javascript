const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const csvRows = data.toString().split('\n');
        csvRows.forEach((row) => {
          const [name, program] = row.split(',');
          if (program && !students[program]) {
            students[program] = [];
          }
          students[program].push(name);
        });
        resolve(students);
      }
    });
  });
}
