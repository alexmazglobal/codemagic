'use strict';


window.renderStatistics = function(ctx, names, times) {
    var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var getRandom = function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// тень облака
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';;
ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);
// облако
ctx.fillStyle = '#fff';
ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

// контур облака
ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
ctx.strokeRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

// надпись на облаке
ctx.fillStyle = "#000";
ctx.font = "16px PT Mono";

ctx.fillText("Список результатов: ", 150, 50);

// выводим текст
for(var j=0; j<names.length; j++) { 
    ctx.fillText(names[j], 130 + j*80, CLOUD_HEIGHT - 10); 
  }
// столбцы диаграммы
ctx.fillStyle = "rgb(0, 0, 255, 0.2)";
var maxResult = Math.max.apply(null, times);
for (var i=0; i < times.length; i++) {
var dp = times[i];
var colorRectRandom = getRandom(0, 150);
console.log(colorRectRandom);
if (names[i] === "Вы") {
    ctx.fillStyle = "rgb(255, 0, 0)";
} else {
    ctx.fillStyle = "rgb(0, " +colorRectRandom+", 255)";
    console.log("22");
}
if (dp === maxResult) {
    dp = 150;
    ctx.fillStyle = "#000";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура "+ names[i] +" победил!", 150, 30);
    ctx.fillStyle = "rgb(0, " +colorRectRandom+", 255)";
    
} else {
    dp = Math.round(dp*150/maxResult);
}
ctx.fillRect(130 + i*80, (CLOUD_HEIGHT - dp) - 30, 40, dp);
ctx.fillStyle = "#000";
    ctx.font = "16px PT Mono";
    ctx.fillText(Math.round(times[i]),130 + i*80, (CLOUD_HEIGHT - dp) - 35);
    
}
}