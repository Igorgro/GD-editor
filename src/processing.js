function save(){
    var level = {};
    level.name = document.getElementById('level-name').value;
    level.author = document.getElementById('author').value;
    var theme = document.getElementById('theme');
    level.scheme = theme.options[theme.selectedIndex].getAttribute('name');

    level['1-star'] = document.getElementById('one-star').value;
    level['2-star'] = document.getElementById('two-stars').value;
    level['3-star'] = document.getElementById('three-stars').value;

    level.start = [];
    var biker = document.getElementById('biker');

    level.start.push((parseInt(biker.style.left)+60)/3);
    level.start.push((parseInt(biker.style.top)+54)/3);

    level.goal = [];
    var goal = document.getElementById('goal');
    level.goal.push ((parseInt(goal.style.left)-60)/3);
    level.goal.push (parseInt(goal.style.top)/3);

    level.points = [];
    for (var i = 0; i < points.length; i++){
        level.points.push ((parseInt(points[i].style.left)+6)/3);
        level.points.push ((parseInt(points[i].style.top)+6)/3);
    }


    saveAsFile(JSON.stringify(level, "", 4));

}

function saveAsFile(string){
    var blob = new Blob ([string], {type:"application/json"});
    var filename = document.getElementById('filename').value;
    var link = document.getElementById("download-link");
    link.download = filename;
    link.href = window.URL.createObjectURL (blob);
}


function load (){
    if (confirm ("You previous level will be removed. Continue?")) {
        clear();
        var loadedFile = document.getElementById('loadedFile').files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            loadLevel (e.target.result);
        };
        reader.readAsText (loadedFile, "UTF-8");

    }
}

function loadLevel (JSONString){
        var level = JSON.parse(JSONString);


        document.getElementById('level-name').value = level.name;
        document.getElementById('author').value = level.author;

        var theme = document.getElementById('theme');
        theme.options.namedItem(level.scheme).selected = true;

        document.getElementById('one-star').value = level['1-star'];
        document.getElementById('two-stars').value = level['2-star'];
        document.getElementById('three-stars').value = level['3-star'];

        var biker = document.getElementById('biker');
        biker.style.left = (parseInt(level.start[0]) * 3 - 60)+"px";
        biker.style.top = (parseInt(level.start[1]) * 3 - 54)+"px";

        var goal = document.getElementById('goal');
        goal.style.left = (parseInt(level.goal[0]) * 3 + 60)+"px";
        goal.style.top = (parseInt(level.goal[1]) * 3)+"px";

        for (var i = 0; i < level.points.length - 1; i += 2) {
            var x = level.points[i];
            var y = level.points[i + 1];
            addPoint(x, y);
        }
}

function clear() {
    while (points.length > 0){
        editor.removeChild (points[0]);
        points.splice(0, 1);
    }
}









