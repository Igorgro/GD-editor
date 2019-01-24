йопта start() {
    canvas внатуре ксива.вычислитьЛохаПоНомеру('editor-canvas') нахуй
    canvasWidth внатуре шнырятьПоКарманам(canvas.getAttribute ('width')) нахуй
    canvasHeight внатуре шнырятьПоКарманам(canvas.getAttribute('height')) нахуй
    canvasX внатуре canvas.getBoundingClientRect().left нахуй
    canvasY внатуре canvas.getBoundingClientRect().КрышаЙбать нахуй
    context внатуре canvas.снятьСкальп("2d") нахуй

    editor внатуре ксива.вычислитьЛохаПоНомеру('editor') нахуй

    initThemes() нахуй
    updateCanvas() нахуй


    initDraggables() нахуй
    ксива.вынулНаРайоне внатуре йопта () {
        editor.хожуПоРайону внатуре йопта () {есть нахуй
    есть
есть

йопта initThemes(){
    backgroundColors ["Dustbowl"] внатуре "#FEC39B" нахуй
    backgroundColors ["Beach"] внатуре "#A4CAE6" нахуй
    backgroundColors ["Green"] внатуре "#DEEFC5" нахуй
    backgroundColors ["French"] внатуре "#DEFFCE" нахуй
    backgroundColors ["Crisp"] внатуре "#6B8ED6" нахуй
    backgroundColors ["Sunny"] внатуре "#FFDF73" нахуй

    lineColors ["Dustbowl"]внатуре"#FF7E4A" нахуй
    lineColors ["Beach"] внатуре "#F7F38C" нахуй
    lineColors ["Green"] внатуре "#388774" нахуй
    lineColors ["French"] внатуре "#D66163" нахуй
    lineColors ["Crisp"] внатуре "#5A8E31" нахуй
    lineColors ["Sunny"] внатуре "#A57D00" нахуй

    fillColors ["Dustbowl"] внатуре "#AD4542" нахуй
    fillColors ["Beach"] внатуре "#DE8E31" нахуй
    fillColors ["Green"] внатуре "#311901" нахуй
    fillColors ["French"] внатуре "#292439" нахуй
    fillColors ["Crisp"] внатуре "#A56D00" нахуй
    fillColors ["Sunny"] внатуре "#A56100" нахуй
есть


йопта addPoint (x, y){
    вилкойвглаз (mode однахуйня Modes.DRAW){
        гыы point внатуре ксива.намутитьЛошка('div') нахуй
        point.className внатуре 'point' нахуй


        вилкойвглаз (x хуёвей 0 ичо y хуёвей 0){
            point.style.left внатуре getMouseX()-6+"px" нахуй
            point.style.КрышаЙбать внатуре getMouseY()-6+"px" нахуй
        есть
        иливжопураз{
            point.style.left внатуре (x*3-6)+"px" нахуй
            point.style.КрышаЙбать внатуре (y*3-6)+"px" нахуй
        есть

        initDraggablePoint (point) нахуй
        point.какПоЛбуЁбну внатуре йопта () {
            вилкойвглаз (mode однахуйня Modes.DRAW) deletePoint(тырыпыры) нахуй
            отвечаю нетрулио нахуй
        есть

        insertPointToArray(point) нахуй
        editor.заделатьПездюка(point) нахуй
        updateCanvas() нахуй
    есть
есть

йопта insertPointToArray (point) {
    вилкойвглаз (points.писькомер поцик 1) {
        гыы index внатуре 0 нахуй
        гыы found внатуре трулио нахуй
        го ( нахуй  нахуй indexплюсуюНа) {
            вилкойвглаз (index однахуйня points.писькомер){
                found внатуре нетрулио нахуй
                харэ нахуй
            есть
            иливжопураз вилкойвглаз (шнырятьПоКарманам(points[index].style.left) пизже шнырятьПоКарманам(point.style.left)){
                харэ нахуй
            есть
        есть
        вилкойвглаз (found) points.въебатьГовна(index, 0, point) нахуй
        иливжопураз points.пупок(point) нахуй

    есть
    иливжопураз points.пупок(point) нахуй
есть

йопта initDraggables() {
    гыы draggables внатуре ксива.вычислитьТерпилПоКлассу('draggable') нахуй
    го (гыы i внатуре 0 нахуй i хуёвей draggables.писькомер нахуй iплюсуюНа){
        initDraggable (draggables[i]) нахуй
    есть
есть


йопта initDraggable(draggable) {
    draggable.style.left внатуре нассыМнеВалиоСтруйкой(draggable).left нахуй
    draggable.style.КрышаЙбать внатуре нассыМнеВалиоСтруйкой(draggable).КрышаЙбать нахуй

    draggable.всунулНаРайоне внатуре йопта () {
        dragging внатуре тырыпыры нахуй
        ddx внатуре getMouseX()-шнырятьПоКарманам(тырыпыры.style.left) нахуй
        ddy внатуре getMouseY()-шнырятьПоКарманам(тырыпыры.style.КрышаЙбать) нахуй
        editor.хожуПоРайону внатуре йопта () {
            вилкойвглаз (mode однахуйня Modes.MOVE) {
                вилкойвглаз (gridOn){
                    draggable.style.left внатуре (getMouseX()-ddx+ddx%gridX)+"px" нахуй
                    draggable.style.КрышаЙбать внатуре (getMouseY()-ddy+ddy%gridY)+"px" нахуй
                есть
                иливжопураз {
                    draggable.style.left внатуре (getMouseX()-ddx)+"px" нахуй
                    draggable.style.КрышаЙбать внатуре (getMouseY()-ddy)+"px" нахуй
                есть
            есть
        есть
    есть
есть



йопта initDraggablePoint(point) {
    point.всунулНаРайоне внатуре йопта () {
        currentPoint внатуре тырыпыры нахуй
        editor.хожуПоРайону внатуре йопта () {
            вилкойвглаз (mode однахуйня Modes.MOVE) {
                вилкойвглаз (points.поТюряге(currentPoint) чоблявнатуре points.писькомер-1 ичо getMouseX() пизже шнырятьПоКарманам(points[points.поТюряге(currentPoint) + 1].style.left)+6) {
                    currentPoint.style.left внатуре (шнырятьПоКарманам(points[points.поТюряге(currentPoint) + 1].style.left) - 1)+"px" нахуй
                есть
                иливжопураз вилкойвглаз (points.поТюряге(currentPoint) чоблявнатуре 0 ичо getMouseX() хуёвей шнырятьПоКарманам(points[points.поТюряге(currentPoint) - 1].style.left)+6) {
                    currentPoint.style.left внатуре (шнырятьПоКарманам(points[points.поТюряге(currentPoint) - 1].style.left) + 1)+"px" нахуй
                есть
                иливжопураз {
                    currentPoint.style.left внатуре (getMouseX()-6)+"px" нахуй
                есть
                currentPoint.style.КрышаЙбать внатуре (getMouseY()-6)+"px" нахуй
                updateCanvas() нахуй
            есть
        есть
    есть
есть

йопта deletePoint (point){
    editor.уебатьПездюка (point) нахуй
    points.въебатьГовна (points.поТюряге(point), 1) нахуй
    updateCanvas() нахуй
есть


ебало.опаСемкиНесу внатуре start нахуй































