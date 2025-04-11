//Export pures functions
export {splitWordInArray, getWellPlaced, getNotInWordAndInWord, compareWords};

// Pures functions
function splitWordInArray(word){
    if (typeof(word) === "string") 
        return word.split("");
    else 
        return "Ceci n'est pas un mot!"
};

function getWellPlaced (playerWord, wordToGuess){
    const playerArray = splitWordInArray(playerWord);
    const arrayToGuess = splitWordInArray(wordToGuess);
    let wellPlaced = [];
    
    for (let i = 0; i <= arrayToGuess.length-1; i++) {
        if (arrayToGuess[i] === playerArray[i]) {
            wellPlaced.push(playerArray[i]);
        }
    } 
    return wellPlaced;
};

function getNotInWordAndInWord (playerWord, wordToGuess){
    const playerArray = splitWordInArray(playerWord);
    const arrayToGuess = splitWordInArray(wordToGuess);
    let notInWord = [];
    let inWord = [];
    
    for (const char of playerArray) {
        if (arrayToGuess.includes(char) === false) 
            notInWord.push(char);
        else 
        inWord.push(char);
}
return {notInWord, inWord};
};

function compareWords(playerWord, wordToGuess){
    const WELL_PLACED = getWellPlaced(playerWord, wordToGuess);
    const {notInWord: NOT_IN_WORD} = getNotInWordAndInWord(playerWord, wordToGuess);
    const {inWord : IN_WORD} = getNotInWordAndInWord(playerWord, wordToGuess);
    
    let miss_placed = [];
    for (const char of IN_WORD){
        if(WELL_PLACED.includes(char) === false)
            miss_placed.push(char);
    }
    return {WELL_PLACED, miss_placed, NOT_IN_WORD}
};

// Pures functions export for testing


let WORD_INPUT;
let WORD_PLAYER_TRY;
let WIN_MESSAGE;
let BUTTON;


// Function called by click : checks the user's proposition and displays the result
function gamePlay(){  
    const WORD_TO_GUESS = "dictionnaire";
    const PLAYER_WORD = WORD_INPUT.value.toLowerCase();
    WORD_INPUT.value = "";
    WORD_PLAYER_TRY.textContent = `Mot proposé: ${PLAYER_WORD}`;
    
    if (PLAYER_WORD === WORD_TO_GUESS)
        WIN_MESSAGE.textContent = "MO MO MOTUS ! Bravo, tu as trouvé !";

    const {WELL_PLACED} = compareWords(PLAYER_WORD, WORD_TO_GUESS);
    document.querySelector("#well").textContent = `Bien placé: ${WELL_PLACED}`;

    const{miss_placed} = compareWords(PLAYER_WORD, WORD_TO_GUESS);
    document.querySelector("#miss").textContent = `Mal placé: ${miss_placed}`;
    
    const{NOT_IN_WORD} = compareWords(PLAYER_WORD, WORD_TO_GUESS);
    document.querySelector("#notInWord").textContent = `Pas dans le mot: ${NOT_IN_WORD}`;
};

// DOM elements
if(typeof document !== 'undefined'){
    WORD_INPUT = document.querySelector("#playerWord");
    WORD_PLAYER_TRY = document.querySelector("#playerTry");
    WIN_MESSAGE = document.querySelector("#winMessage");
    BUTTON = document.querySelector("#validationButton");

    BUTTON.addEventListener("click", gamePlay);

    document.addEventListener("keydown", event =>{
        if (event.key === "Enter")
        gamePlay()
    });
};




