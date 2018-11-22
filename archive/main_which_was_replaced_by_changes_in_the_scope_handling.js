var mainState = function(game){
};

var football = {}

mainState.prototype = {
    
    preload() {
        game.load.image('football', 'assets/football.png');
    },
    
    
    create() {
        
        game.stage.backgroundColor = '#67BA26';
        
        this.footballWidth = game.cache.getImage('football').width;
        this.footballHeight = game. cache.getImage('football').height;
        
        this.footballs = game.add.group();
        
        this.timer = game.time.events.loop(1500, this.generateFootballFlow, this);
        
        football.inputEnabled = true;
        football.events.onInputDown.add(this.destroyFootball, this);
        
        //football.input.onTap.add(this.destroyFootball, this);
    },
    
    update() {
        
    },

    
    addOneFootball(x,y) {
        
        this.footballY = Math.floor(Math.random() * 700) + 1;
        
        football = game.add.sprite(x, this.footballY, 'football');
        this.footballs.add(football);
        
        game.physics.arcade.enable(football);
        football.body.velocity.x = -200;
        football.checkWorldBounds = true;
        football.outOfBoundsKill = true;
    },
    
    generateFootballFlow() {
        
        var footballsNeeded = 1;
        
//                var hole = Math.floor(Math.random() * 5) + 1;
//        var hole = Math.floor(Math.random() * (footballsNeeded - 3)) + 1;
        
        for (var i = 0; i < footballsNeeded; i++)
            
                this.addOneFootball(this.game.world.width, this.footballHeight );
//                this.addOnePipe(400, i * 60 + 10);
    },
    
    destroyFootball(football) {
        football.destroy();
    }
};