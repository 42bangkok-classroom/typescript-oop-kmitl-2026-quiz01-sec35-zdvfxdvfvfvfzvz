const input = process.argv[2];

function grade(score: number): string {
  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

if (input === undefined) {
  console.log("Invalid Input");
} else {
  const score = Number(input);

  if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid Input");
  } else {
    console.log(`Grade is ${grade(score)}`);
  }
}
