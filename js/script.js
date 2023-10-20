const elementRow = document.querySelector(".row");
let elementGrid = "";

// PROGRAM LOGIC

for (let i = 1; i <= 100; i++) {
  let result;
  let color;
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz");
    result = "FizzBuzz";
    color= "ms_fizz-buzz"
  } else if (i % 3 === 0) {
    console.log("Fizz");
    result = "Fizz";
    color= "ms_fizz"
  } else if (i % 5 === 0) {
    console.log("Buzz");
    result = "Buzz";
    color= "ms_buzz"
  } else {
    console.log(i);
    result = `${i}`;
    color="ms_normal"
  }
  elementGrid += `<div class="${color} col-3 col-md-2 ms_col d-flex card">${result}</div>`;
}

elementRow.innerHTML = elementGrid;
