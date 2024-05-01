const fs = require('fs');

module.exports = function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
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
        console.log(`Number of students: ${studentCount}`);
        Object.keys(fields).forEach((field) => {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
        resolve();
      }
    });
  });
}
