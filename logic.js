
//These variables create an image tag with the source of the image tag referencing my cards. 
let baseURL = new URL("https://github.com/YumonWilliams/Cardgame.git")

let punisher1 = new Image();
punisher1.src = new URL("/media/cards/punisher1.png", baseURL);

let punisher2 = new Image();
punisher2.src = new URL("/media/cards/punisher2.png", baseURL);

let robocop = new Image();
robocop.src = new URL("./media/cards/robocop.png", baseURL);

let t800 = new Image();
t800.src = new URL("./media/cards/t800.png", baseURL);

let t1000 = new Image();
t1000.src = new URL("./media/cards/t1000.png", baseURL); 

let twins = new Image();
twins.src = new URL("./media/cards/twins.png", baseURL);

let xena = new Image();
xena.src = new URL("./media/cards/xena.png", baseURL);

let cash = new Image();
cash.src = new URL("./media/cards/cash.png", baseURL);

//an array holding the cards
let cardArray = [punisher1, punisher2, robocop, t800, t1000, twins, xena, cash];

const slot_A = document.getElementById('slot_A');
const slot_B = document.getElementById('slot_B');
const slot_C = document.getElementById('slot_C');
const slot_D = document.getElementById('slot_D');
const slot_E = document.getElementById('slot_E');
const slot_F = document.getElementById('slot_F');
const slot_G = document.getElementById('slot_G');
const slot_H = document.getElementById('slot_H');
const slot_I = document.getElementById('slot_I');
const slot_J = document.getElementById('slot_J');
const slot_K = document.getElementById('slot_K');
const slot_L = document.getElementById('slot_L');
const slot_M = document.getElementById('slot_M');
const slot_N = document.getElementById('slot_N');
const slot_O = document.getElementById('slot_O');

//this array contains the individul slots that will take the cards. 
const slotArray = [slot_A, slot_B, slot_C, slot_D, slot_E, slot_F, slot_G, slot_H, slot_I, slot_J, slot_K, slot_L, slot_M, slot_N, slot_O, slot_P];

const startButton = document.getElementById('startButton');



startButton.addEventListener("click",function(){
  
    console.log(slotArray);    
});



