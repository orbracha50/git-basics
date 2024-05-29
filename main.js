'use strict'
var ball1Size = 100
function onBallClick(elball) {
    ball1Size += 50
    if (ball1Size > 400) {
        ball1Size = 100
    }
    elball.style.height = ball1Size + 'px'
    elball.style.width = ball1Size + 'px'

}