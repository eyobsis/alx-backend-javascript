#!/bin/bash

# Task 0
echo 'import getListStudents from "./0-get_list_students.js";' > 0-main.js
echo 'console.log(getListStudents());' >> 0-main.js

# Task 1
echo 'import getListStudentIds from "./1-get_list_student_ids.js";' > 1-main.js
echo 'import getListStudents from "./0-get_list_students.js";' >> 1-main.js
echo 'console.log(getListStudentIds("hello"));' >> 1-main.js
echo 'console.log(getListStudentIds(getListStudents()));' >> 1-main.js

# Task 2
echo 'import getListStudents from "./0-get_list_students.js";' > 2-main.js
echo 'import getStudentsByLocation from "./2-get_students_by_loc.js";' >> 2-main.js
echo 'const students = getListStudents();' >> 2-main.js
echo 'console.log(getStudentsByLocation(students, "San Francisco"));' >> 2-main.js

# Task 3
echo 'import getListStudents from "./0-get_list_students.js";' > 3-main.js
echo 'import getStudentIdsSum from "./3-get_ids_sum.js";' >> 3-main.js
echo 'const students = getListStudents();' >> 3-main.js
echo 'const value = getStudentIdsSum(students);' >> 3-main.js
echo 'console.log(value);' >> 3-main.js

# Task 4
echo 'import getListStudents from "./0-get_list_students.js";' > 4-main.js
echo 'import updateStudentGradeByCity from "./4-update_grade_by_city.js";' >> 4-main.js
echo 'console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));' >> 4-main.js
echo 'console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));' >> 4-main.js

# Task 5
echo 'import createInt8TypedArray from "./5-typed_arrays.js";' > 5-main.js
echo 'console.log(createInt8TypedArray(10, 2, 89));' >> 5-main.js

# Task 6
echo 'import setFromArray from "./6-set.js";' > 6-main.js
echo 'console.log(setFromArray([12, 32, 15, 78, 98, 15]));' >> 6-main.js

# Task 7
echo 'import hasValuesFromArray from "./7-has_array_values.js";' > 7-main.js
echo 'console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));' >> 7-main.js
echo 'console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));' >> 7-main.js
echo 'console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));' >> 7-main.js

# Task 8
echo 'import cleanSet from "./8-clean_set.js";' > 8-main.js
echo 'console.log(cleanSet(new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]), "bon"));' >> 8-main.js
echo 'console.log(cleanSet(new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]), ""));' >> 8-main.js

# Task 9
echo 'import groceriesList from "./9-groceries_list.js";' > 9-main.js
echo 'console.log(groceriesList());' >> 9-main.js

# Task 10
echo 'import updateUniqueItems from "./10-update_uniq_items.js";' > 10-main.js
echo 'import groceriesList from "./9-groceries_list.js";' >> 10-main.js
echo 'const map = groceriesList();' >> 10-main.js
echo 'console.log(map);' >> 10-main.js
echo 'updateUniqueItems(map);' >> 10-main.js
echo 'console.log(map);' >> 10-main.js
