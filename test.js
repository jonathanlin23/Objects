

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


// =================================================================
// PROBLEM 3 — Searching an Array of Objects
// =================================================================
// Write a function findByName(students, targetName) that:
//   - Uses .find() to return the student object with that name
//   - Returns null if no match is found
//
// Expected output:
//   findByName(students, "ChenZee") → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }
//   findByName(students, "Marcus")  → null


/* const students =
[{name: "ChenZee", grade:12, gpa: 3.5, isHonors: false}];

function findByName(students, targetName) { 
  return students.find(student => student.name === targetName) || null

}
console.log("\n--- Problem 3 ---");
console.log(findByName(students, "ChenZee"));
console.log(findByName(students, "Jane"));
console.log(findByName(students, "Marcus"));  
 */

// =================================================================
// PROBLEM 4 — Roster Report
// =================================================================
// Write a function printRoster(students) that uses .forEach() to
// print each student in this format:
//
//   [Grade 11] Jane — GPA: 3.8 ★
//   [Grade 12] ChenZee — GPA: 3.5
//   [Grade 10] Dakota — GPA: 3.9 ★
//
// The ★ appears only if isHonors is true.
// Try solving without the honors first THEN try the star
const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

function printRoster(students) {
  // TODO: loop through students with .forEach()
  // TODO: print each student in the format above

}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 4 ---");
// printRoster(students);