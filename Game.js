function Game(){

    var currentLevel = 1;
    var maxLevel = 6;

    // Start New Level
    this.start = function(){
        level = new Level(currentLevel);
        player =  new Element(0, 250, 25, 25);
        generate(level.ai, level.config, AIElement);
        generate(level.food, level.config, Element);
    }

    this.nextLevel = function () {
        currentLevel = (currentLevel == maxLevel)? 1 : currentLevel+1;
        this.start();
    }

    this.showStats = function(){
        // Display Current Life
        let hearth = String.fromCharCode(10084);
        let life = textTimes(hearth, level.config.life);
        displayText("Life " + life, 25, 500);

        // Display Current Level
        displayText("Level " + currentLevel, 25, 450);
    }

}