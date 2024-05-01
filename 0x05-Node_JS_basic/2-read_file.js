const fs = require('fs');

module.exports = function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
