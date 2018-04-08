var canvas;
var context;

//canvas parameters
var canvasWidth;
var canvasHeight;
var canvasX;
var canvasY;

//canvas grid step
var gridX = 30;
var gridY = 30;

var editor;

//track points
var points = [];

//Current dragging dot
var currentPoint;

var Modes = {DRAW: 1, MOVE: 2};
var mode = Modes.DRAW;

var gridOn = true;

//themes
var backgroundColors = []
var lineColors = [];
var fillColors = [];


//Drag and drop
var dragging;
var ddx;
var ddy;