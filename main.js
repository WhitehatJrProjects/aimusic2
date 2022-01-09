peterpanmusic = "";
moanamusic = "";

function preload() {
    peterpanmusic = loadSound("peterpanmusic.mp3");
    moanamusic = loadSound("moana.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    canvas.position(450, 250)

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}


