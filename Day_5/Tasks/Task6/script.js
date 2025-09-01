var val=prompt("Enter name of person and 0 to exit");
let persons=[];

while (val !== "0") {
    persons.push(val);
    val = prompt("Enter name of person (0 to exit)");
}

let randomPerson1 = persons[Math.floor(Math.random() * persons.length)];
let randomPerson2 = persons[Math.floor(Math.random() * persons.length)];

while (randomPerson1 === randomPerson2 && persons.length > 1) {
    randomPerson2 = persons[Math.floor(Math.random() * persons.length)];
}
alert(`[${randomPerson1},${randomPerson2}]`)