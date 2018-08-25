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

    this.showStats = function(){
        // Display Current Life
        var life = textTimes(String.fromCharCode(CONFIG.lifeCharCode), this.life);
        displayText("Life " + life, 25, CONFIG.screen.h - 40);

        // Display Current Level
        displayText("Level " + currentLevel, 25, CONFIG.screen.h - 20);
    };

    this.hasLost = function () {
       return (this.life <= 0) ;
    };
}