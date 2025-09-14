let sum = 0;

while (true) {
  let val = prompt(`Enter the value or 0 to exit \nTotal= ${sum}`);
  if(isNaN(val)){
    alert("enter a valid number");
    continue;
  }
  if (val == 0) {
    break;
  }
  sum += Number(val);
  if (sum > 100) {
    alert("Sum exceeded 100");
    break;
  }
}

document.writeln(`<h1>Total: ${sum}</h1>`);
