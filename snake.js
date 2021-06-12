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
    let black = true;
    for (let i = 0; i < 320; i += 20) {
        for (let j = 0; j < 320; j += 10) {
            if (black) {
                board_ctx.fillStyle = "#000000";          
            } else {
                board_ctx.fillStyle = "#AAAAAA";
            }
            board_ctx.fillRect(i, j, i + 20, j + 20);
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