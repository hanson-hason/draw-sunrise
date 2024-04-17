let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Sky

ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(0, 0, 400, 400);

//Sun

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.arc(200, 300, 15, 0, 2 * Math.PI);
ctx.fill();

//Land

ctx.fillStyle = "rgb(8, 132, 4)";
ctx.fillRect(0, 300, 400, 400);

//DRAW IMAGE

let htmlImg = document.getElementById("cloth-cloud");

//Bottom Cloud
ctx.drawImage(htmlImg, 130, 125);

//Top Cloud
ctx.drawImage(htmlImg, 165, 100);