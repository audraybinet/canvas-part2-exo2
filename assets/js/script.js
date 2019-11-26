const canvas=document.querySelector("canvas");
const ctx= canvas.getContext("2d");

(function draw(){
ctx.beginPath();
ctx.moveTo(160, 175);
ctx.quadraticCurveTo(200,80,240,175);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();
})();

(function draw(){
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(200,120,300,200);
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(200,270,300,200);
ctx.closePath();
ctx.fillStyle = '#E0E1F3';
ctx.fill();
ctx.stroke();
})();
