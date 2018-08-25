function Player(x, y, h, w) {
    this.e = new Element(x, y, h, w);
    var maxShield = 100;
    this.shield = 0;
    this.addShield = function (qty){
        this.shield = (this.shield + qty > maxShield) ? maxShield : this.shield + qty;
    };
    this.reduceShield = function (qty){
        this.shield = (this.shield - qty <= 0) ? 0 : this.shield - qty;
    };


    this.getSkin = function(){
        return (this.shield > 0) ? this.skins.knight : this.skins.naked;
    }


    this.skins = {
        naked : new Image(),
        knight: new Image()
    };

    this.skins.naked.src = 'naked.png';
    this.skins.knight.src = 'Knight.png';

}

