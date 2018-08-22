function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function generate(item, space, itemObj) {
    for (let i = 0; i < item.qty; i++) {
        var x = random(space.width - item.width);
        var y = random(space.height - item.height);
        item.list.push(new itemObj(x, y, item.width, item.height));
    }
}

function checkCollision(item1, item2){
    if(axisCollision(item1.x, item1.xw, item2.x, item2.xw)
        && axisCollision(item1.y, item1.yh, item2.y, item2.yh) )
        return true;
}

function axisCollision(item1px1, item1px2, item2px1, item2px2){
    return (item1px1 > item2px1 && item1px1 < item2px2  )
        ||  (item1px2 >item2px1  && item1px2 <  item2px2)
        ||  (item2px1 >item1px1  && item2px1<  item1px2);
}