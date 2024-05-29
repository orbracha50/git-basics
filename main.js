'use strict'
var ball1Size = 100
var ball2Size = 150
function onBallClick1(elball) {
    ball1Size += 50
    if (ball1Size > 400) {
        ball1Size = 100
    }
    elball.style.height = ball1Size + 'px'
    elball.style.width = ball1Size + 'px'
}
function onBallClick2(elball) {
    ball2Size += 50
    if (ball2Size > 400) {
        ball2Size = 150
    }
    elball.style.height = ball2Size + 'px'
    elball.style.width = ball2Size + 'px'
}
function onBallClick3(elball) {
    var elball1 = document.querySelector(`.ball1`)
    var elball2 = document.querySelector(`.ball2`)
    if (elball1.style.backgroundColor === 'yellow') {
        elball1.style.backgroundColor = 'blue'
        elball2.style.backgroundColor = 'yellow'
        elball1.style.height = ball1Size + 'px'
        elball1.style.width = ball1Size + 'px'
        elball2.style.height = ball2Size + 'px'
        elball2.style.width = ball2Size + 'px'
    } else {
        elball1.style.height = ball2Size + 'px'
        elball1.style.width = ball2Size + 'px'
        elball2.style.height = ball1Size + 'px'
        elball2.style.width = ball1Size + 'px'
        elball1.style.backgroundColor = 'yellow'
        elball2.style.backgroundColor = 'blue'
    }
}