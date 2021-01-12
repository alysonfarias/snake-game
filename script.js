let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";
snake[0] = {
    x: 7*box,
    y: 7*box
}


function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0, 16 * box , 16 * box);
}

function criarCobra(){
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle = "green";
        context.fillRect(snake[index].x, snake[index].y,box, box);
        
    }
}
function iniciarJogo(){
    criarBG();
    criarCobra();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction ==  "right") snakeX += box;
    if(direction ==  "left") snakeX -= box;
    if(direction ==  "up") snakeX -= box;
    if(direction ==  "down") snakeX += box;

    snake.pop();
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }
     snake.unshift(newHead);



}
iniciarJogo();


let jogo = setInterval(iniciarJogo, 100);
