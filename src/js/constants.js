//This script shamefully contains global constants and variables

var pressedKeys = [];
var paused = false;
var i = 0;

//player constants
var PLAYER_STARTING_X = 390;
var PLAYER_STARTING_Y = 60;
var AMPLITUDE_X = 230;
var AMPLITUDE_Y = 230;
var CIRCLE_SPEED = 0.003;
var MOVEMENT_START_POSITION = (3*Math.PI)/2;
var X_SHIFT = 390;
var Y_SHIFT = 290;
var PLAYER_RADIUS = 14;

//Enemies constants
var ENEMY_STARTING_X = -300;
var ENEMY_STARTING_Y = 610;
var ENEMY_SPEED = 1;
var ENEMY_RADIUS = 6;

//City constants
var CITY_STARTING_X = 30;
var CITY_STARTING_Y = 30;
var CITY_RADIUS = 6;

//Gates constants
var GOLD_GATE_X_POSITION = 176;
var GOLD_GATE_Y_POSITION = 411;
var BLUE_GATE_X_POSITION = 356;
var BLUE_GATE_Y_POSITION = 497;
var RED_GATE_X_POSITION = 536;
var RED_GATE_Y_POSITION = 411;
var PURPLE_GATE_X_POSITION = 356;
var PURPLE_GATE_Y_POSITION = 28;
var GATE_HEALTH = 100;

var GOLD_GATE_X_CENTER = 217;
var GOLD_GATE_Y_CENTER = 452;
var BLUE_GATE_X_CENTER = 397;
var BLUE_GATE_Y_CENTER = 538;
var RED_GATE_X_CENTER = 577;
var RED_GATE_Y_CENTER = 452;
var PURPLE_GATE_X_CENTER = 397;
var PURPLE_GATE_Y_CENTER = 70;

var PURPLE_GATE = 1;
var GOLD_GATE = 2;
var BLUE_GATE = 3;
var RED_GATE = 4;

var TOWN_CENTER_X = 401;
var TOWN_CENTER_Y = 300;
var GATE_RADIUS = 41;
 
