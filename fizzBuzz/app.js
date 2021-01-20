// First attempt
function fizzBuzz() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} fizzbuzz`);
      }
      console.log(`${i} fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} buzz`);
    } else {
      console.log(i);
    }
  }
}

// Second attempt
function fizzBuzz2() {
  for (let i = 1; i < 100; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "fizz";
    }
    if (i % 5 === 0) {
      output += "buzz";
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
}
