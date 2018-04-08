function getMouseX(){
    if (gridOn){
        var dx = (event.clientX - canvasX + editor.scrollLeft) % gridX;

        if (dx < gridX/2) return (event.clientX - canvasX + editor.scrollLeft - dx);
        else              return (event.clientX - canvasX + editor.scrollLeft - dx + gridX);
    }
    else {
        return event.clientX - canvasX + editor.scrollLeft;
    }
}

function getMouseY(){
    if (gridOn){
        var dy = (event.clientY - canvasY + editor.scrollTop) % gridY;

        if (dy < gridY/2) return (event.clientY - canvasY + editor.scrollTop- dy);
        else              return (event.clientY - canvasY + editor.scrollTop - dy + gridY);
    }
    else {
        return event.clientY - canvasY + editor.scrollTop;
    }
}

function getTheme(){
    var themeSelector = document.getElementById('theme');
    return themeSelector.options[theme.selectedIndex].innerHTML;
}


function changeMode(){
    var radiobuttons = document.querySelectorAll ("input[name='mode']");
    //console.log(radiobuttons[0].checked);
    if (radiobuttons[0].checked) mode = Modes.DRAW;
    else                         mode = Modes.MOVE;
}
function toggleGrid(checkbox) {
    gridOn = checkbox.checked;
    updateCanvas();
}