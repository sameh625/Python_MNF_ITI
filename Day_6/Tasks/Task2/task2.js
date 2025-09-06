let timer = document.querySelector(".timer");
let msg   = document.querySelector(".msg");
let reset = document.querySelector(".reset");

let interval;
let redirectTimeout;
let counts = 5;

function times(){
    timer.textContent = counts;
    interval = setInterval(() => {
        timer.textContent = counts;

        if (counts <= 0) {
            clearInterval(interval);
            msg.innerHTML = `Flash Sale has started! <a href="https://www.amazon.com" target="_blank">Go to Sale</a>`;
            redirectTimeout = setTimeout(() => {
                window.location.href = "https://www.amazon.com";
            }, 2000);
        } else {
            counts--; // only decrease while > 0
        }
    }, 1000);   
}

reset.addEventListener("click", () => {
    clearInterval(interval);
    clearTimeout(redirectTimeout);
    msg.innerHTML = "";
    counts = 5;
    times();
});

times();
