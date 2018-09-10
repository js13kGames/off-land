function Player(x, y, w, h) {
  this.e = new ElementUI(x, y, h, w);
  var maxShield = 100;
  this.shield = 0;
  this.hurt = 0;
  this.addShield = function (qty) {
    this.shield = (this.shield + qty > maxShield) ? maxShield : this.shield
        + qty;
  };
  this.reduceShield = function (qty) {
    this.shield = (this.shield - qty <= 0) ? 0 : this.shield - qty;
  };

  this.getSkin = function () {
    return (this.shield > 0) ? this.skins.knight : (this.hurt < 0)
        ? this.skins.normal : this.skins.hurt;
  };

  this.skins = {
    normal: new Image(),
    knight: new Image(),
    hurt: new Image()
  };

  this.skins.normal.src = imgBase64(IMGS.player);
  this.skins.knight.src = imgBase64(IMGS.safe);
  this.skins.hurt.src = imgBase64(IMGS.hurt);

}

