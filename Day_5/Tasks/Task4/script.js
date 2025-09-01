let x=[];
for(let i=0;i<3;i++){
    let value=prompt(`Enter value ${i+1}`);
    x.push(value);
}
let sum=0,mul=1,div=1;
for(let i=0;i<3;i++){
    x[i]=Number(x[i])
    sum+=x[i];
    mul*=x[i];
    if(x[i]!=0){
        div=x[i]/div;
    }
}

document.writeln(`
    <div style="padding:10px; margin:10px">
    <h3 style="color:red">sum of the 3 values ${x[0]}+${x[1]}+${x[2]} = ${sum}</h3>
    <h3 style="color:red">multiplication of the 3 values ${x[0]}*${x[1]}*${x[2]} = ${mul}</h3>
    <h3 style="color:red">division of the 3 values ${x[0]}/${x[1]}/${x[2]} = ${div}</h3>
    </div>

    `)
