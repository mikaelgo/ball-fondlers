var preloadState = function(game){};

preloadState.prototype = {

	preload: function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.disableVisibilityChange = true;
        
        this.game.load.image('football', 'assets/football.png');
	},

	create: function(){
		this.game.state.start("main");
	}
}