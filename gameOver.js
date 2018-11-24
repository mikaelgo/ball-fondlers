var gameOverState = function(game){};

gameOverState.prototype = {

  	create(){
//        this.highScore = Math.max(this.score, this.highScore);
//        localStorage.setItem(localStorageName, this.highScore);
        
        
        var gameOverTxt = game.add.text(game.world.centerX, game.world.centerY, "", 
        { font: "30px Arial", fill: "#ffffff" });
        
        gameOverTxt.text = "Game Over! \n Tap to restart \n Your Score: " + this.score + "\n Best Score: " ;
        gameOverTxt.anchor.set(0.5);
        gameOverTxt.align = 'center';
        
        console.log("SCORE: ", this.score);
        
        game.input.onTap.add(this.restartGame, this);
    },
        
	restartGame(){
		game.state.start("main");
	}
	
}