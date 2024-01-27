const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let spanElement = document.createElement("span");
    let spanText = document.createTextNode(letter);
    spanElement.appendChild(spanText);
    spanElement.className = "letter-box";
    lettersContainer.appendChild(spanElement);
});

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);
// get the index of a random key
let randomKeyNumber = Math.floor(Math.random() * allKeys.length);
let keyName = allKeys[randomKeyNumber];
document.querySelector(".container .head-info .kind span").innerHTML = keyName;
let category = words[keyName];
let randomWordNumber = Math.floor(Math.random() * category.length);
// the choosen word
let wordName = category[randomWordNumber];

let letterGuess = document.querySelector(".letter-guess");
let wordArray = Array.from(wordName.toLowerCase());
let wordLength = 0;
wordArray.forEach(word => {
    wordLength++;
    let span = document.createElement("span");
    if(word === ' '){
        span.className = "with-space";
        wordLength--;
    }
    letterGuess.appendChild(span);
});
let counter = 0;
let boxs = document.querySelectorAll(".letter-guess span");
let game = document.querySelector(".the-draw");
document.addEventListener("click", (e) => {
    let isItTrue = false;
    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");
        wordArray.forEach((char,index) => {
            if(char === e.target.innerHTML){
                wordLength--;
                isItTrue = true
                boxs.forEach((trueChar,charIndex) => {
                    if(charIndex === index){
                        boxs[charIndex].innerHTML = char;
                    }
                });
            }
        });
        if(isItTrue === false){
            counter++;
            game.classList.add(`wrong${counter}`);
            if(counter === 8){
                GameOver();
                lettersContainer.classList.add("finished");
            }
        }
        if(wordLength === 0){
            congratulations();
            lettersContainer.classList.add("finished");
        }
    }
    
})
function GameOver() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game Over, The Word Is ${wordName}`);
    div.appendChild(divText);
    div.className = 'popup';
    document.body.appendChild(div);
}
function congratulations() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Congratulations, You Do It With ${counter} Wrong Charachters Only!`);
    div.appendChild(divText);
    div.className = 'popup';
    document.body.appendChild(div);
}

