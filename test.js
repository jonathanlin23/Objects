const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 1 — Reading Object Properties
// =================================================================
// You are given this movie object. Write code below to:
//   1. Print the title
//   2. Print the director
//   3. Print true/false: is the runtime over 120 minutes?
//   4. Add a new property `watched` set to true
//   5. Print each key-value pair using console.log("Title:", movie.title) style

/* const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
  watched: true,
};

console.log(movie.title)
console.log(movie.year)
if (movie.runtime>120)
  console.log("true")
else console.log("false")
console.log(movie.watched) */

/* function createStudent(name,grade,gpa) {
  return{
  name: name,
  grade: grade,
  gpa: gpa,
  IsHonors:gpa>=3.5
};
}
console.log("\n--- Problem 2 ---");
console.log(createStudent("Alex", 11, 3.7));
console.log(createStudent("Sam", 10, 2.9)); */

function findByName(Students, targetName){
const ChenZee = {
  name: targetName,
  grade: 12
  gpa: 3.5
  Is Honors: true
}

}
console.log("\n--- Problem 3 ---");
console.log(findByName(students, "ChenZee"));
console.log(findByName(students, "Jane"));
console.log(findByName(students, "Marcus"));