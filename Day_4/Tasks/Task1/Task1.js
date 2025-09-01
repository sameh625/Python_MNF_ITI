var message = prompt("Enter a message:")

for(let i=1;i<=6;i++){
    document.writeln(`<h${i}>${message} number ${i}</h${i}>`);
}