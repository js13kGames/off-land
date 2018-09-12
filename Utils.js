function random(max) {
  return Math.floor((Math.random() * max) + 1)
}

function generate(item, space, itemObj) {
  var safeLocation = 5;
  for (var i = 0; i < item.qty; i++) {
    var x = random(space.w - item.width - safeLocation);
    var y = random(space.h - item.height - safeLocation);
    item.list.push(new itemObj(x, y, item.width, item.height));
  }
}

function generateItemRandomly(item, itemConf) {
  if (item.list.length < itemConf.max && random(itemConf.chance) < 2) {
    generate(item, CONFIG.screen, ElementUI);
  }
}

function checkCollision(item1, item2) {
  if (axisCollision(item1.x, item1.xw, item2.x, item2.xw)
      && axisCollision(item1.y, item1.yh, item2.y, item2.yh)) {
    return true;
  }
}

function axisCollision(item1px1, item1px2, item2px1, item2px2) {
  return (item1px1 > item2px1 && item1px1 < item2px2  )
      || (item1px2 > item2px1 && item1px2 < item2px2)
      || (item2px1 > item1px1 && item2px1 < item1px2);
}

function removeElementIfCollision(item) {
  var i = item.list.length;
  while (i--) {
    if (checkCollision(item.list[i], player.e)) {
      item.list.splice(i, 1);
      item.onCollision();
    }
  }
}

function TextUI(txt, x, y) {
  this.txt = txt;
  this.init_x = x;
  this.init_y = y;
  this.x = 0;
  this.y = 0;
  this.xw = 0;
  this.yh = 0;
  this.e = {w: 5, h: 5};
}

function changeResolution(val, change){
  return change > 0 ? val / 100 * change : val;
}
function changeRelativeResolution(val, from, to){
  return change > 0 ? val / 100 * change : val;
}