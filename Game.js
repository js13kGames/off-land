function Game(){
    var currentLevel = CONFIG.start;
    this.life = CONFIG.life;

    // Start New Level
    this.start = function(){
        level = new Level(currentLevel);
        player =  new Player(CONFIG.initPos.x, CONFIG.initPos.y, CONFIG.player.w, CONFIG.player.h);
        player.addShield(CONFIG.shield.start);
        generate(level.ai, CONFIG.screen, AI);
        generate(level.food, CONFIG.screen, Element);
    };

    this.nextLevel = function () {
        currentLevel = (currentLevel === LEVEL_CONFIG.levels)? CONFIG.start : currentLevel+1;
        this.start();
    };

    this.restart = function () {
        currentLevel = CONFIG.start;
        this.life = CONFIG.life;
        this.start();
    };

    this.hasLost = function () {
       return (this.life <= 0) ;
    };

    this.mousemove = function(pos){
        player.e.move(pos.x, pos.y);
    };

    this.click = function(pos){
        // PAUSE GAME???
        game = new Menu();
    };

    this.draw = function(){
		drawBackground();
        checkFoodCollision();
        checkShieldCollision();
        checkTimeFreezeCollision();

        drawPlayer();
        drawFood();
        drawShield();
        drawTimeFreeze();
        drawAI();
        drawStats();

        checkLevelStatus();
    }

}