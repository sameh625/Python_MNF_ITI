let x = [];
for (let i = 0; i < 5; i++) {
  let value = prompt(`Enter value ${i + 1}`);
  x.push(Number(value));
}
document.writeln(`
    <div style="padding:10px; margin:10px">
    <h3 style="color:red">u've entered the values of ${x}</h3>
    </div>
    `);



document.writeln(`
    <div style="padding:10px; margin:10px">
    <h3 style="color:red">u've entered the values of ${x.sort().reverse()}</h3>
    </div>
    `);

document.writeln(`
    <div style="padding:10px; margin:10px">
    <h3 style="color:red">u've entered the values of ${x.sort()}</h3>
    </div>
    `);
