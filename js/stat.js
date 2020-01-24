'use strict';

var cloud = {
  WIDTH : 420,
  HEIGHT : 270,
  X : 110,
  Y : 10
}

var bar = {
  WIDTH : 40,
  height : 150
}

var GAP = 10;
var FONT_GAP = 50;
var TEXT_HEIGHT = 30;
var diagramStartY = cloud.HEIGHT - TEXT_HEIGHT - bar.height;
var diagramStartX = cloud.X + FONT_GAP;
var barindented = bar.WIDTH + FONT_GAP;

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || '#000000';
  ctx.font = font || '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  drawRect(ctx, cloud.X + GAP, cloud.Y + GAP, cloud.WIDTH, cloud.HEIGHT, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, cloud.X, cloud.Y, cloud.WIDTH, cloud.HEIGHT, '#fff');
  drawText(ctx, 'Ура вы победили!', cloud.X + FONT_GAP, cloud.Y + GAP);
  drawText(ctx, 'Список результатов:', cloud.X + FONT_GAP, cloud.Y + GAP * 3);

  for (var i = 0; i < players.length; i++) {
    var maxTime = getMaxElement(times);
    var barHeightItem = (bar.height * times[i]) / maxTime;
    var x = diagramStartX + barindented * i;
    var y = diagramStartY + bar.height - barHeightItem;
    drawRect(ctx, x, y, bar.WIDTH, barHeightItem, players[i] == 'Вы' ? 'rgba(255, 0, 0.1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)')
    drawText(ctx, Math.round(times[i]), x, y - GAP * 2);
    drawText(ctx, players[i], x, diagramStartY + bar.height + GAP);
  }
}
