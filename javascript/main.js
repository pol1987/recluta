//------------- // * GLOBAL VARIABLES

//console.log("probandooo") PASO 0: comprobamos Conexion

const startBtn = document.querySelector("#start-btn"); // acceder botón START--->DOM
const startScreen = document.querySelector("#splash-screen"); // acceder pantalla inicial--->DOM
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas"); // accedemos al canvas DOM
const ctx = canvas.getContext("2d"); // conectado a 2.2.1 borrar canvas, primero necesitamos esto
let game; // creo la variable fuera de la función para que sea global, dentro de la función no se puede llamar
let mainMusic = new Audio ("../sounds/musicajuego.mp3");



//------------ // * STATE MANAGEMENT FUNCTIONS

// 1.4 hacer funcionalidad de que al apretar START! se escondan el resto de elementos
const startGame = () => {
  console.log("iniciando juego");
  startScreen.style.display = "none"; //1.4.1 
  canvas.style.display = "block"; //1.4.3
  // gameOverScreen.style.display = "none";   
  mainMusic.preload = "auto"; 
  mainMusic.play();
  game = new Game();
  game.gameLoop()

  // game.gameLoop();
};

// const keyPress = (event) => {
//   if (event.code === "Space") {
//     console.log("apretando boton space");
//     // como ejecutamos el metodo del pollo jumpPollo
//     game.pollo.jumpPollo();
//   }
// };


// const keyPressJump = (event) => {
//   if (event.code === "ControlLeft") {    
//     game.recluta.jumpRecluta();
//   }
// }



//----------------// * ADD EVENT LISTENERS

// //1.1 agregamos un add event listener para el click del botón START de la pantalla inicial
startBtn.addEventListener("click", startGame); // 1.3 Primero declaramos la funcion startGame y luego arriba la creamos.
// startBtn.addEventListener("click", soundInicio);
window.addEventListener("keydown", (event) => {
  game.recluta.jumpRecluta(event)
});
// window.addEventListener("keyup", keyUpGround);



// restartBtn.addEventListener("click", startGame);
// window.addEventListener("keydown", keyPress);
