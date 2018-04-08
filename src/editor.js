function start() {
    canvas = document.getElementById('editor-canvas');
    canvasWidth = parseInt(canvas.getAttribute ('width'));
    canvasHeight = parseInt(canvas.getAttribute('height'));
    canvasX = canvas.getBoundingClientRect().left;
    canvasY = canvas.getBoundingClientRect().top;
    context = canvas.getContext("2d");

    editor = document.getElementById('editor');

    initThemes();
    updateCanvas();


    initDraggables();
    document.onmouseup = function () {
        editor.onmousemove = function () {};
    }
}

function initThemes(){
    backgroundColors ["Dustbowl"] = "#FEC39B";
    backgroundColors ["Beach"] = "#A4CAE6";
    backgroundColors ["Green"] = "#DEEFC5";
    backgroundColors ["French"] = "#DEFFCE";
    backgroundColors ["Crisp"] = "#6B8ED6";
    backgroundColors ["Sunny"] = "#FFDF73";

    lineColors ["Dustbowl"]="#FF7E4A";
    lineColors ["Beach"] = "#F7F38C";
    lineColors ["Green"] = "#388774";
    lineColors ["French"] = "#D66163";
    lineColors ["Crisp"] = "#5A8E31";
    lineColors ["Sunny"] = "#A57D00";

    fillColors ["Dustbowl"] = "#AD4542";
    fillColors ["Beach"] = "#DE8E31";
    fillColors ["Green"] = "#311901";
    fillColors ["French"] = "#292439";
    fillColors ["Crisp"] = "#A56D00";
    fillColors ["Sunny"] = "#A56100";
}


function addPoint (x, y){
    if (mode == Modes.DRAW){
        var point = document.createElement('div');
        point.className = 'point';


        if (x < 0 && y < 0){
            point.style.left = getMouseX()-6+"px";
            point.style.top = getMouseY()-6+"px";
        }
        else{
            point.style.left = (x*3-6)+"px";
            point.style.top = (y*3-6)+"px";
        }

        initDraggablePoint (point);
        point.oncontextmenu = function () {
            if (mode == Modes.DRAW) deletePoint(this);
            return false;
        }

        insertPointToArray(point);
        editor.appendChild(point);
        updateCanvas();
    }
}

function insertPointToArray (point) {
    if (points.length >= 1) {
        var index = 0;
        var found = true;
        for (; ; index++) {
            if (index == points.length){
                found = false;
                break;
            }
            else if (parseInt(points[index].style.left) > parseInt(point.style.left)){
                break;
            }
        }
        if (found) points.splice(index, 0, point);
        else points.push(point);

    }
    else points.push(point);
}

function initDraggables() {
    var draggables = document.getElementsByClassName('draggable');
    for (var i = 0; i < draggables.length; i++){
        initDraggable (draggables[i]);
    }
}


function initDraggable(draggable) {
    draggable.style.left = getComputedStyle(draggable).left;
    draggable.style.top = getComputedStyle(draggable).top;

    draggable.onmousedown = function () {
        dragging = this;
        ddx = getMouseX()-parseInt(this.style.left);
        ddy = getMouseY()-parseInt(this.style.top);
        editor.onmousemove = function () {
            if (mode == Modes.MOVE) {
                if (gridOn){
                    draggable.style.left = (getMouseX()-ddx+ddx%gridX)+"px";
                    draggable.style.top = (getMouseY()-ddy+ddy%gridY)+"px";
                }
                else {
                    draggable.style.left = (getMouseX()-ddx)+"px";
                    draggable.style.top = (getMouseY()-ddy)+"px";
                }
            }
        }
    }
}



function initDraggablePoint(point) {
    point.onmousedown = function () {
        currentPoint = this;
        editor.onmousemove = function () {
            if (mode == Modes.MOVE) {
                if (points.indexOf(currentPoint) != points.length-1 && getMouseX() > parseInt(points[points.indexOf(currentPoint) + 1].style.left)+6) {
                    currentPoint.style.left = (parseInt(points[points.indexOf(currentPoint) + 1].style.left) - 1)+"px";
                }
                else if (points.indexOf(currentPoint) != 0 && getMouseX() < parseInt(points[points.indexOf(currentPoint) - 1].style.left)+6) {
                    currentPoint.style.left = (parseInt(points[points.indexOf(currentPoint) - 1].style.left) + 1)+"px";
                }
                else {
                    currentPoint.style.left = (getMouseX()-6)+"px";
                }
                currentPoint.style.top = (getMouseY()-6)+"px";
                updateCanvas();
            }
        }
    }
}

function deletePoint (point){
    editor.removeChild (point);
    points.splice (points.indexOf(point), 1);
    updateCanvas();
}


window.onload = start;































