function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}

function colorRect(x,y, w,h, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(x,y, w,h);
}

function displayText(txt, x, y){
    canvasContext.font="20px Georgia";
    canvasContext.fillStyle = "white";
    canvasContext.fillText(txt, x, y);
}

function displayImage(img, x, y, w, h){
    canvasContext.drawImage(img, x, y, w, h);
}

function textTimes(txt, times){
    return (times > 0) ? new Array( times + 1 ).join( txt ) : "";
}