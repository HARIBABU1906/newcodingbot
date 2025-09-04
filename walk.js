function calculateGrade() {
  let total = 0;
  let subjects = 5;

  for (let i = 1; i <= subjects; i++) {
    let marks = parseFloat(prompt("Enter marks for Subject " + i + " (out of 100):"));
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Invalid input! Please enter marks between 0 and 100.");
      return;
    }
    total += marks;
  }

  let average = total / subjects;
  let grade = "";

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  alert(
    "📊 Results:\n" +
    "Total Marks: " + total + "\n" +
    "Average Marks: " + average.toFixed(2) + "\n" +
    "Grade: " + grade
  );
}
