class Hangman {
    constructor(puzzle){
        
        this.hangmanWord = puzzle.toLowerCase().split('')
        this.guessed = []
        this.noGuessed = '* '
        this.remaining = puzzle.length
        this.status = 'Playing'
    
    }
    set puzzle(guessWord){
        if (this.remaining <= 0) return
        if (!this.guessed.includes(guessWord)){
            this.guessed.push(guessWord)
            this.guessed = [...this.guessed, guessWord]
        }
        this.remaining--
        
    }
    
    get statusMessage() {
        if (this.guessed.length === 0) return this.status
        
        if (this.hangmanWord.every((word)=> this.guessed.includes(word) )) 
        {
            this.status = 'Finished'
            this.remaining = 0
        }
        else {
            
            if (this.remaining === 0) {
                this.status = 'The puzzle was: ' + this.hangmanWord.join('')
                
            }
        }
        return this.status
    }
   
}
export {Hangman as default}