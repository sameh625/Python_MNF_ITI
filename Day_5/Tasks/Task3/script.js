

var search=(s,char)=>{
    let ans = "";
    for(let i=0;i<s.length;i++){
        if(s[i]==char){
            ans+=i+" ";
        }
    }
    alert(ans);
}

let str=prompt("Enter the string: ");
let ch=prompt("Enter the letter: ");

search(str,ch);