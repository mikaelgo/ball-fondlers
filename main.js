var mainState = function(game){
};

mainState.prototype = {
    
    preload() {
        game.load.image('football', 'assets/football.png');
    },
    
    
    create() {
        
        this.ballsMissed = 0;
        this.ballSpeed = -200;
        this.score = 0;
        
        game.stage.backgroundColor = '#67BA26';
        /* Maybe these should not be here since they are not necessary this this state class
        this.footballWidth = game.cache.getImage('football').width;
        this.footballHeight = game. cache.getImage('football').height;
        */
        this.footballs = game.add.group();
        //bind function addOneFootball to the scope of this prototype (=same as class)
        //so that we can reference the game properties inside the function
        this.addOneFootball = this.addOneFootball.bind(this)
        this.destroyFootball = this.destroyFootball.bind(this)
        
        this.timer = game.time.events.loop(1500,
            this.addOneFootball, this);    
    },
    
    update() {
       
    },

    
    addOneFootball(x,y) {
        var x = game.world.width;
        var y = 700;
        
        console.log("this " , this)

        var randomY = Math.floor(Math.random() * y) + 1;
        var football = game.add.sprite(x, randomY, 'football');
        
        this.footballs.add(football);
        
        game.physics.arcade.enable(football);
        football.body.velocity.x = this.ballSpeed;
        football.checkWorldBounds = true;
        football.outOfBoundsKill = true;
        
        football.inputEnabled = true;
        football.events.onInputDown.add(this.destroyFootball, football);
    },
    
    destroyFootball(footballToBeDestroyed) {
        //on every destroy player wil get one point
        this.score ++;
        this.ballSpeed -= 10;
        this.timer.delay -= 20;
        console.log("destroying this football " , footballToBeDestroyed, this.score)
        footballToBeDestroyed.destroy();
        
    }
};