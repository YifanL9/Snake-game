// get the canvas
const board = document.getElementById("board");
const board_ctx = board.getContext("2d");
// create a snake 
let snake = [
    { x: 0, y: 0 },
    { x: 40, y: 0 },
    { x: 80, y: 0 },
    { x: 120, y: 0 },
]

let distance = 0;
let speed = 0;
let time = 0;
let length = 0;

function drawBoarder() {
    // horizontal and vertical line
    var black = true;
    for (var i = 0; i < 640; i += 40) {
        for (var j = 0; j < 640; j += 40) {
            if (black) {
                board_ctx.fillStyle = "#000000";          
            } else {
                board_ctx.fillStyle = "#AAAAAA";
            }
            board_ctx.fillRect(i, j, i + 40, j + 40);
            black = !black;
        }
        black = !black;
    }
}

function main() {
    drawBoarder();
    updateConstant();
}
main();

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateConstant(){
    document.getElementById("distance").innerText = "distance: " + distance;
    document.getElementById("speed").innerText = "speed: " + speed;
    document.getElementById("time").innerText = "time: " + time;
    document.getElementById("length").innerText = "length: " + length;
}