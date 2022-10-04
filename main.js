let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Context renderiza o desenho que vai acontecer dentro do Canvas
let box = 32; //16+16 / 16 pixels para ficar quadrado
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";


function criarBG () {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //O fillRect vai desenhar o retangulo onde vai acontecer o jogo e também trabalha com 4 parametros, posição de X e Y, altura e largura 
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop(); //Vai tirar um do ARRAY

    let newHead = {
        x: snakeX,
        y: snakeY
    }
snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); //Aqui está sendo passado um intervalo de 100 milesegundos para a função iniciar o jogo e a cada 100 milisegundos vai estar em uma vaga a cada 1oo ml e vai dar continuidade ao jogo sem travar

