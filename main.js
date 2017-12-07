var Word=require("./random.js");
var prompt=require("prompt");

console.log("Welcome to the Food Hangman!");
console.log("Guess a letter of any food!");
console.log("Goodluck!!");
console.log("------------------------");
prompt.start();


game={
	wordBank: ["strawberry","banana","carrot","pumpkin","squash","pepperoni","sausage","hotdogs"],
	wordsWon:0,
	guessesRemaining: 10,
	currentWord: null,

	startGame: function(newWord) {
		this.resetGuesses();
		this.currentWord= new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		this.currentWord.getLetter();
		this.promptUser();
	},

	resetGuesses: function(){
		this.guessesRemaining=10;
	},

	promptUser: function(){
		var self=this;
		prompt.get(["guessLetter"], function(err, result){
			console.log("You guesses: " + result.guessLetter);
			var manyGuessed=self.currentWord.checkLetter(result.guessLetter);

			if (manyGuessed===0){
				console.log("Wrong!");
				self.guessesRemaining--;
			}
			else{
				console.log("Correct!");
					if(self.currentWord.findWord()){
						console.log("You Won!");
						console.log("------------------");
						return;
					}
			}

			console.log("Guesses remaining: " + self.guessesRemaining);
			console.log("----------------");
			if((self.guessesRemaining>0) && (self.currentWord.found===false)){
				self.promptUser();
			}
			else if(self.guessesRemaining===0){
				console.log("Game over. Correct Word ", self.currentWord.target);
			}
			else {
				console.log(self.currentWord.wordRender());
			}
		});
	}
};

game.startGame();