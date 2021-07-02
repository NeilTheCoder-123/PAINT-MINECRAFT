var canvas = new fabric.Canvas('canvas');

playx = 10;
playy = 10;

block_width = 30;
block_height = 30;

playerObject = "";
blockObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);

        playerObject.set({
            top: playy,
            left: playx
        });

        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(block_width);
        blockObject.scaleToHeight(block_height);

        blockObject.set({
            top: playy,
            left: playx
        });

        canvas.add(blockObject);
    });
}

window.addEventListener('keydown', keydown);

function keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    console.log(e);
    if (e.shiftKey == true && keyPressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (e.shiftKey && keyPressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if(keyPressed == '87'){
        up();
        console.log("Up. ");
    }
    if(keyPressed == '83'){
        down();
        console.log("Down. ");
    }
    if (keyPressed == '65'){
        left();
        console.log("Left. ");
    }
    if (keyPressed == '68'){
        right();
        console.log("Right. ");
    }
    if (keyPressed == '84'){
        newImage('trunk.jpg');
    }
    if (keyPressed == '66'){
        newImage('wall.jpg');
    }
    if (keyPressed == '89'){
        newImage('yellow_wall.png');
    }
    if (keyPressed == '82'){
        newImage('roof.jpg');
    }
    if (keyPressed == '85'){
        newImage('unique.png');
    }
    if (keyPressed == '76'){
        newImage('light_green.png');
    }
    if (keyPressed == '71'){
        newImage('dark_green.png');
    }
    if (keyPressed == '67'){
        newImage('cloud.jpg');
    }
    if (keyPressed == '70'){
        newImage('ground.png');
    }
}
function up(){
    if (playy >= 0){
        playy = playy - block_height;
        canvas.remove(playerObject);
        player_update();
    }
}
function down(){
    if (playy <= 500){
        playy = playy + block_height;
        canvas.remove(playerObject);
        player_update();
    }
}
function left(){
    if (playx >= 0){
        playx = playx - block_width;
        canvas.remove(playerObject);
        player_update();
    }
}
function right(){
    if (playx <= 900){
        playx = playx + block_width;
        canvas.remove(playerObject);
        player_update();
    }
}