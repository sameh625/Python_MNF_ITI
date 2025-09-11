let str = prompt("Enter the string:");
let count = 0;
var counter=(s)=>{
    for(let i=0;i<=s.length;i++){
        if(s[i]=='e'){
            count++;
        }
    }
    return count;
}

alert(`Number of 'e' in string is: ${counter(str)}`);

