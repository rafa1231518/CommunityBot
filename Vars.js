var CHEAT;
var rand;
var bWnd=[];
var iWnd;
var msgCrit;
var msgEffect;

var obTrans;
var obConf;
var obCmds;
var obMoveDB;
var obMonParty;
var obEquipDB;
var obItemDB;

var aTypeMatchup = [
	[1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[1, .5, 2, 1, .5, .5, 1, 1, 2, 1, 1, .5, 2, 1, 1, 1, .5],
	[1, .5, .5, 2, 2, .5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .5],
	[1, 1, 1, .5, 1, 1, 1, 1, 2, .5, 1, 1, 1, 1, 1, 1, .5],
	[1, 2, .5, .5, .5, 2, 1, 2, .5, 2, 1, 2, 1, 1, 1, 1, 1],
	[1, 2, 1, 1, 1, .5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, .5, .5, 1, 1, .5, 1],
	[1, 1, 1, 1, .5, 1, .5, .5, 2, 1, 2, .5, 1, 1, 1, 1, 1],
	[1, 1, 2, 0, 2, 2, 1, .5, 1, 1, 1, 1, .5, 1, 1, 1, 1],
	[1, 1, 1, 2, .5, 2, .5, 1, 0, 1, 1, .5, 2, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, .5, 1, 1, 1, .5, 2, 1, 2, 1, 2, 1],
	[1, 2, 1, 1, .5, 1, .5, 1, .5, 2, 1, 1, 2, 1, 1, 1, 1],
	[.5, .5, 2, 1, 2, 1, 2, .5, 2, .5, 1, 1, 1, 1, 1, 1, 2],
	[0, 1, 1, 1, 1, 1, 0, .5, 1, 1, 1, .5, 1, 2, 1, 2, 1],
	[1, .5, .5, .5, .5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
	[1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, .5, 1, .5, 1],
	[.5, 2, 1, 1, .5, .5, 2, 0, 2, .5, .5, .5, .5, .5, .5, .5, .5]
];