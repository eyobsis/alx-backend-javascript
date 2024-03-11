#!/bin/bash

# Task 0
echo 'export default function getListStudents() {' > 0-get_list_students.js
echo '  return [' >> 0-get_list_students.js
echo '    { id: 1, firstName: "Guillaume", location: "San Francisco" },' >> 0-get_list_students.js
echo '    { id: 2, firstName: "James", location: "Columbia" },' >> 0-get_list_students.js
echo '    { id: 5, firstName: "Serena", location: "San Francisco" }' >> 0-get_list_students.js
echo '  ];' >> 0-get_list_students.js
echo '}' >> 0-get_list_students.js

# Task 1
echo 'export default function getListStudentIds(students) {' > 1-get_list_student_ids.js
echo '  if (!Array.isArray(students)) {' >> 1-get_list_student_ids.js
echo '    return [];' >> 1-get_list_student_ids.js
echo '  }' >> 1-get_list_student_ids.js
echo '  return students.map(student => student.id);' >> 1-get_list_student_ids.js
echo '}' >> 1-get_list_student_ids.js

# Task 2
echo 'export default function getStudentsByLocation(students, city) {' > 2-get_students_by_loc.js
echo '  return students.filter(student => student.location === city);' >> 2-get_students_by_loc.js
echo '}' >> 2-get_students_by_loc.js

# Task 3
echo 'export default function getStudentIdsSum(students) {' > 3-get_ids_sum.js
echo '  return students.reduce((sum, student) => sum + student.id, 0);' >> 3-get_ids_sum.js
echo '}' >> 3-get_ids_sum.js

# Task 4
echo 'export default function updateStudentGradeByCity(students, city, newGrades) {' > 4-update_grade_by_city.js
echo '  return students' >> 4-update_grade_by_city.js
echo '    .filter(student => student.location === city)' >> 4-update_grade_by_city.js
echo '    .map(student => {' >> 4-update_grade_by_city.js
echo '      const gradeObj = newGrades.find(grade => grade.studentId === student.id);' >> 4-update_grade_by_city.js
echo '      const grade = gradeObj ? gradeObj.grade : "N/A";' >> 4-update_grade_by_city.js
echo '      return { ...student, grade };' >> 4-update_grade_by_city.js
echo '    });' >> 4-update_grade_by_city.js
echo '}' >> 4-update_grade_by_city.js

# Task 5
echo 'export default function createInt8TypedArray(length, position, value) {' > 5-typed_arrays.js
echo '  const buffer = new ArrayBuffer(length);' >> 5-typed_arrays.js
echo '  const view = new DataView(buffer);' >> 5-typed_arrays.js
echo '  if (position < 0 || position >= length) {' >> 5-typed_arrays.js
echo '    throw new Error("Position outside range");' >> 5-typed_arrays.js
echo '  }' >> 5-typed_arrays.js
echo '  view.setInt8(position, value);' >> 5-typed_arrays.js
echo '  return view;' >> 5-typed_arrays.js
echo '}' >> 5-typed_arrays.js

# Task 6
echo 'export default function setFromArray(array) {' > 6-set.js
echo '  return new Set(array);' >> 6-set.js
echo '}' >> 6-set.js

# Task 7
echo 'export default function hasValuesFromArray(set, array) {' > 7-has_array_values.js
echo '  return array.every(value => set.has(value));' >> 7-has_array_values.js
echo '}' >> 7-has_array_values.js

# Task 8
echo 'export default function cleanSet(set, startString) {' > 8-clean_set.js
echo '  return [...set]' >> 8-clean_set.js
echo '    .filter(value => value.startsWith(startString))' >> 8-clean_set.js
echo '    .map(value => value.substring(startString.length))' >> 8-clean_set.js
echo '    .join("-");' >> 8-clean_set.js
echo '}' >> 8-clean_set.js

# Task 9
echo 'export default function groceriesList() {' > 9-groceries_list.js
echo '  return new Map([' >> 9-groceries_list.js
echo '    ["Apples", 10],' >> 9-groceries_list.js
echo '    ["Tomatoes", 10],' >> 9-groceries_list.js
echo '    ["Pasta", 1],' >> 9-groceries_list.js
echo '    ["Rice", 1],' >> 9-groceries_list.js
echo '    ["Banana", 5]' >> 9-groceries_list.js
echo '  ])' >> 9-groceries_list.js
echo '}' >> 9-groceries_list.js

# Task 10
echo 'export default function updateUniqueItems(map) {' > 10-update_uniq_items.js
echo '  if (!(map instanceof Map)) {' >> 10-update_uniq_items.js
echo '    throw new Error("Cannot process");' >> 10-update_uniq_items.js
echo '  }' >> 10-update_uniq_items.js
echo '  for (const [key, value] of map.entries()) {' >> 10-update_uniq_items.js
echo '    if (value === 1) {' >> 10-update_uniq_items.js
echo '      map.set(key, 100);' >> 10-update_uniq_items.js
echo '    }' >> 10-update_uniq_items.js
echo '  }' >> 10-update_uniq_items.js
echo '}' >> 10-update_uniq_items.js
