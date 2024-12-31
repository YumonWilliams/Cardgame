const punisher1 = "/media/cards/punisher1.png";

// //an array holding the cards
// let cardArray = [punisher1, punisher2, robocop, t800, t1000, twins, xena, cash];



//this array contains the individul slots that will take the cards. 

const startButton = document.getElementById('startButton');


startButton.addEventListener("click",function(){
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

    let slotArray = [slot_A, slot_B, slot_C, slot_D, slot_E, slot_F, slot_G, slot_H, slot_I, slot_J, slot_K, slot_L, slot_M, slot_N, slot_O, slot_P];

    slotArray.forEach(function(slotID) {
        let img = new Image();
        img.src = punisher1;
        document.getElementById(slotID).appendChild(img);
    });
});



