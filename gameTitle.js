var gameTitleState = function(game){};

gameTitleState.prototype = {

  	create(){
        
        var style = {
       			font: "60px VT323",
               	fill: "#ffffff",
               	align: "center"
       		};
        
         var gameTitleTxt = game.add.text(game.world.centerX, game.world.centerY, "", style);
        
        gameTitleTxt.text = "Ball Fondlers \n \n Tap the balls \n \n to destroy them!";
        gameTitleTxt.anchor.set(0.5);
        
        this.game.input.onTap.add(this.startGame, this);
    },
        
	startGame(){
		this.game.state.start("main");
	}
};