let timer =document.querySelector(".timer")
let msg   = document.querySelector(".msg")
let reset = document.querySelector(".reset")

let interval;
let counts=5;

var times=()=>{
    timer.textContent = counts;
    interval =setInterval(()=>{
        timer.textContent = counts;
        
        if(counts <= 0){
            clearInterval(interval);
            msg.innerHTML = `Flash Sale has started! <a href="https://www.amazon.com" target="_blank">Go to Sale</a>`;
            setTimeout(()=>{
                window.location.href="https://www.amazon.com"
            },2000)
        }
        counts--;
    }, 1000)
}


times()
