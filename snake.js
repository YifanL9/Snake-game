import { userPreference } from "./userPreference.js"; 
const snakeColor = userPreference[0];

// Keep track of the status of the snake 
let gameStatus = {
    distance: 0,     // how many blocks snake has travelled so far    
    currentSpeed: 0, // the speed of snake: how many blocks in second 
    time: 0,    // measure the time in seconds the snake the has survived
    length: 1,  // the current length of the snake, initialized to 1  
}

// create a snake object, by default is on the upper left corner 
// by default the length of it is 1, and the head of the snake is always
// the first element
let snake = [
    // { x: 80, y: 0 },
    // { x : 60, y : 0},
    // { x : 40, y : 0},
    // { x : 20, y : 0},
    { x : 0, y : 0}
]

// get the canvas
const board = document.getElementById("board");
const board_ctx = board.getContext("2d");
// Set the width and height of the board 
const cellSize = 20;
const boardSize = userPreference.cellCount * cellSize; 

// The dx and dy of the snake 
let speed = {
    dx: 0,
    dy: 0
}

function main() {
    drawBoarder();
    drawSnake(); 
    updateStatus();
    setInterval(autoMoving, 250);
}
main();

// Draw the board, and can also be used to clear the board
function drawBoarder() {
    board.setAttribute('width', boardSize); 
    board.setAttribute('height', boardSize);
    let black = true;
    // fill board with alternating color
    for (let i = 0; i < boardSize; i += cellSize) {
        for (let j = 0; j < boardSize; j += 20) {
            if (black) {
                board_ctx.fillStyle = "#000000";          
            } else {
                board_ctx.fillStyle = "#AAAAAA";
            }
            board_ctx.fillRect(i, j, cellSize, cellSize);
            black = !black;
        }
        black = !black;
    }
}


// A random number generator which can be used to determine the location of food
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This method update the status of the snake. 
function updateStatus(){
    document.getElementById("distance").innerText = "distance: " + gameStatus.distance;
    document.getElementById("speed").innerText = "speed: " + gameStatus.currentSpeed;
    document.getElementById("time").innerText = "time: " + gameStatus.time;
    document.getElementById("length").innerText = "length: " + gameStatus.length;
}

// draw the snake 
function drawSnake(){
    board_ctx.fillStyle = snakeColor;
    snake.forEach(element => {
        board_ctx.fillRect(element.x, element.y, cellSize, cellSize);
    });
}

// Enable auto moving of the snake
// The snake will not move until the user press the keyboard {ArrowUp, Arrowdown, ArrowLeft ArrowRight} key to move the snake. Then, the snake will start auto moving. 
function autoMoving(){
    const head = snake[0];   
    controlSnake();
    if(speed.dx != 0 || speed.dy != 0){
        let newHead = {
            x: head.x + speed.dx,
            y: head.y + speed.dy
        };
        // To keep the shape of the snake, a new head will be placed in front of 
        // the old head and the tailed will be removed. 
        snake.unshift(newHead);
        snake.pop();
    }
    drawBoarder();  // clear the canvas 
    drawSnake();   //  draw the new location of the snake 
    exit();        //  decide whether the snake is out of range 
}

// The user can press the keyboard {ArrowUp, Arrowdown, ArrowLeft ArrowRight} to control the direction of the snake. 
// The head direction of the snake will not be changed in the following cases
// 1. The direction specified by the user pressed key is the same as the snake moving direction. ex: snake is moving right and the user presses ArrowRight.
// 2. The direction specified by the user pressed key is the opposite as the snake moving direction. ex: snake is moving right and the user presses ArrowLight. 
function controlSnake(){
    window.onkeydown = function(e){
        let initialState = (speed.dy == 0 && speed.dx == 0); 
        switch(e.key){
            case "ArrowLeft": 
                if(speed.dy != 0 || initialState){
                    speed.dx -= cellSize; 
                    speed.dy = 0;
                }
                break;
            case "ArrowUp":
                if(speed.dx != 0 || initialState){
                    speed.dy -= cellSize; 
                    speed.dx = 0;
                }
                break;
            case "ArrowRight":
                if(speed.dy != 0 || initialState){ 
                    speed.dx += cellSize;
                    speed.dy = 0;
                }
                break;
            case "ArrowDown":
                if(speed.dx != 0 || initialState){
                    speed.dy += cellSize;
                    speed.dx = 0;
                }
                break;
            default:
                break;
        }
    }
}

// reset the global variables to go back to the starting state 
// when the snake is dead 
function resetGlobal(){
    speed.dx = 0;
    speed.dy = 0;
    snake[0].x = 0;
    snake[0].y = 0;

}

// alert the user the snake is dead and go back to the starting state
function exit(){
    if(snake[0].x < 0 
        || snake[0].x > (boardSize - cellSize)
        || snake[0].y < 0
        || snake[0].y > (boardSize - cellSize)){
            window.alert("dead");
            resetGlobal();
            location.reload();
        }
}  
