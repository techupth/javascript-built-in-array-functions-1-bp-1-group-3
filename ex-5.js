const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

let getAverageStudentScore = students.reduce((accumulator , currentValue) =>
accumulator + currentValue.score,0 ) / students.length;


console.log(getAverageStudentScore); // Output: 87.5
