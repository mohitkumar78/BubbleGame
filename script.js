function MakeBubble() {
    let clusster = "";
    for (let i = 0; i <= 188; i++) {

        let random = Math.floor(Math.random() * 10);
        clusster += `<div class="bubble">${random}</div>`;
    }
    document.querySelector('.pan-b').innerHTML = clusster;
    document.querySelector('.pan-b').style.color = "black";
}

MakeBubble();
var ran;
function gentrateHit() {
    ran = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = ran;
}
gentrateHit();

let timer = 60;
function RunTimmer() {
    let timmerrun = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timmer").innerHTML = timer;
        }
        else if (timer === 0) {
            document.querySelector('.pan-b').innerHTML = `<h1>Game Over your score is   ${score}</h1>`
        }
        else {
            clearInterval(timmerrun);
        }
    }, 1000)
}
RunTimmer();
var score = 0;
function updateScore() {
    score += 10;
    document.querySelector('#score').innerHTML = score;
}
document.querySelector(".pan-b").addEventListener('click', function (dets) {
    if (Number(dets.target.textContent) == ran) {
        updateScore();
        MakeBubble();
        gentrateHit();
        RunTimmer();
    }
})