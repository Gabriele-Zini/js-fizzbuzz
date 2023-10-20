// PROGRAM LOGICÙ

for (let i = 1; i <= 100; i++) {
  let result;
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz");
    result = "fizz-buzz";
  } else if (i % 3 === 0) {
    console.log("Fizz");
    result = "fizz";
  } else if (i % 5 === 0) {
    console.log("Buzz");
    result = "buzz";
  } else {
    console.log(i);
  }
}
