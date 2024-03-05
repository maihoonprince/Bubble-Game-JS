var gameName = document.getElementById("game-name");

gameName.addEventListener("click", function () {

    var flag = 0;
    if (flag == 0) {
        gameName.innerText = "Play Game Now";
        gameName.style.color = "green";
        flag = flag++;
    }
    else {
        gameName.innerText = "Bubble Game";
        gameName.style.color = "yellow";
        flag = flag--;
    }
});

var timer = "6";
var score = 0;
var hitrn = 0;

function makeHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerText = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 0; i <= 152; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").innerText = timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h2>Your Score is : ${score}</h2>`;
        }

    }, 1000)
}

function calScore(){
    score += 10;
    document.querySelector("#scoreVal").innerText = score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum == hitrn){
        calScore();
        makeBubble();
        makeHit();
    }
})

makeHit();
runTimer();
makeBubble();

