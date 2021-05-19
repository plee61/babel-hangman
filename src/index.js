import Hangman from './hangman.js'
import getPuzzle from './request.js'
const outputElement = document.querySelector('#output')
const guessesEl = document.querySelector('#guesses')

let hangman
document.querySelector('#keyPress').addEventListener('keypress',(e)=>{
    hangman.puzzle = String.fromCharCode(e.charCode)
    
    outputElement.innerHTML = render()
    document.querySelector('#status').textContent = hangman.statusMessage
    
})
document.querySelector('#refresh-btn').addEventListener('click', function () {
    startGame()
})

const render = ()=> {
        
    if ((hangman.remaining < 0)) {
        return 'Please refresh to guess again'
    } 
    
    let output = ''
    hangman.hangmanWord.forEach(word => {
        if ( hangman.guessed.includes(word)){
            output += '<span>'+ word +'</span>'
        }
        else {
            output += hangman.noGuessed
        }
    });
    guessesEl.textContent = `Guesses left: ${hangman.remaining}`
    return `${output}`    
}

document.querySelector("#btnSidepanel").addEventListener('click',function(){
    document.querySelector("#myPanel").style.width = "250px";
})
document.querySelector("#sidepanel").addEventListener('click',function(){
    document.querySelector("#myPanel").style.width = "0px";
})
  
const startGame = async() => {
    const wordNumber = 1
    const puzzle = await getPuzzle(wordNumber)
    hangman = new Hangman(puzzle)
    outputElement.innerHTML = render()
    document.querySelector('#status').textContent = hangman.statusMessage
    document.querySelector('#keyPress').value = ""
    document.querySelector('#keyPress').focus()
} 

startGame()
