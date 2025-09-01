let number = prompt("Enter a number");

if (!isNaN(number)) {
  if (number % 3 == 0 && number % 5 == 0) {
    document.writeln(`<h1>Fizz Buzz</h1>`);
  } else if (number % 3 == 0) {
    document.writeln(`<h1>Fizz</h1>`);
  } else if (number % 5 == 0) {
    document.writeln(`<h1>Buzz</h1>`);
  } else {
    document.writeln(`<h1>None</h1>`);
  }
} else {
  alert("please enter a valid number");
}
