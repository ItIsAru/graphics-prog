let x;
let y;

let xMovement;
let yMovement;

let r,g,b;

function setup() {
    createCanvas(852,480);
    x = 400;
    y = 300;
    xMovement = 2;
    yMovement = 2;
    colorChange();
}

function colorChange() {
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);
}

function draw() {
    background(0);
    rect(x, y, 60, 60);
    fill(r,g,b);

    x = x + xMovement;
    y = y + yMovement;

    if (x + 60 >= width || x == 0) {
        xMovement = xMovement * -1;
        colorChange();
    }
    if (y + 60 >= height || y == 0) {
        yMovement = yMovement * -1;
        colorChange();
    }
}
