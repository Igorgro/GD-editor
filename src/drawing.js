function updateCanvas (){
    canvas.setAttribute('width', ""+canvasWidth);
    editor.style.backgroundColor = backgroundColors[getTheme()];
    if (gridOn) drawGrid();

    drawFilling();
    drawLines();
}

function drawGrid() {
    context.strokeStyle = "#b3b3b3";
    context.lineWidth = 1;
    context.beginPath();
    for (var i = gridX-0.5; i < canvasWidth; i+=gridX) {
        context.moveTo (i, 0);
        context.lineTo (i, canvasHeight);
    }
    for (var i = gridY-0.5; i < canvasHeight; i+=gridY) {
        context.moveTo (0, i);
        context.lineTo (canvasWidth, i);
    }
    context.stroke();
}

function drawFilling() {
    context.fillStyle = fillColors[getTheme()];
    context.lineWidth = 0;
    if (points.length >= 1){
        context.beginPath();
        context.moveTo (0, parseInt(points[0].style.top)+6);
        for (var i = 0; i < points.length; i++) {
            context.lineTo(parseInt(points[i].style.left)+6, parseInt(points[i].style.top)+6);
        }
        context.lineTo (canvasWidth, parseInt(points[points.length-1].style.top)+6);
        context.lineTo (canvasWidth, canvasHeight);
        context.lineTo (0, canvasHeight);
        context.closePath();
        context.fill();
    }
    else if (points.length == 0){
        context.beginPath();
        context.moveTo (0, 300);
        context.lineTo (canvasWidth, 300);
        context.lineTo (canvasWidth, canvasHeight);
        context.lineTo (0, canvasHeight);
        context.closePath();
        context.fill();
    }
}

function drawLines (){
    context.strokeStyle = lineColors[getTheme()];
    context.lineWidth = 5;
    if (points.length >1){
        for (var i = 0; i < points.length-1; i++){
            context.beginPath();
            context.moveTo (parseInt(points[i].style.left)+6, parseInt(points[i].style.top)+6);
            context.lineTo (parseInt(points[i+1].style.left)+6, parseInt(points[i+1].style.top)+6);
            context.stroke();
        }
    }
}