const students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Ahmed", marks: 40 }
];

const passedStudents = students.filter(student => student.marks >= 50);

console.log(passedStudents);