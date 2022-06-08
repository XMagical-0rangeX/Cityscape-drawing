// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

//windows
ctx.fillStyle = "white";
//ctx.fillRect(165, 120, 10, 500);
for (let xval = 170; xval <= 270; xval =xval + 25) {
    ctx.fillRect(xval, 120, 10, 500);
}
for (let yval = 370; yval <= 620; yval =yval + 45) {
    ctx.fillRect(20, yval, 110, 20);
}
for (let xval = 40; xval <= 100; xval =xval + 20) {
    for (let yval = 220; yval <= 320; yval = yval + 20) {
        ctx.fillRect(xval, yval, 10, 10);
    }
}