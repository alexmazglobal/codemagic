'use strict';

window.renderStatistics = function(ctx) {
   
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(160, 100);
    ctx.lineTo(150, 50);
    ctx.lineTo(350, 50);
    ctx.lineTo(340, 100);
    ctx.lineTo(350, 150);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 3;
    ctx.shadowColor = "#000";
    ctx.fill();

    
};