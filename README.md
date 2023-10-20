## EXERCISE

Write a program that prints numbers from 1 to 100 to the console, but for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers which are multiples of both 3 and 5, print 'FizzBuzz'

### SOLUTION


**Program Logic**

Set up a for loop from 1 to 100 with three conditions.

1. The first condition is for numbers that are multiples of both 3 and 5; set the boolean operator in the condition, and print 'FizzBuzz'.

2. The second condition is for numbers that are multiples only of 3 print 'Fizz'.

3. The third condition is for numbers that are multiples only of 5 print 'Buzz'.

4. In the else statement, print 'i'.

```javascript

for (let i = 1; i <= 100; i++) {
  let result;
  let color;
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz");
    result = "FizzBuzz";
    color= "fizz-buzz"
  } else if (i % 3 === 0) {
    console.log("Fizz");
    result = "Fizz";
    color= "fizz"
  } else if (i % 5 === 0) {
    console.log("Buzz");
    result = "Buzz";
    color= "buzz"
  } else {
    console.log(i);
    result = `${i}`;
    color="normal"
  }
  elementGrid += `<div class="${color} col-3 col-md-2 ms_col d-flex card">${result}</div>`;
}

```
<br>

**Output**

Assign the value of elementGrid to elementRow as the HTML content.

```javascript
elementRow.innerHTML = elementGrid;
```

