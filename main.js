var canvas=new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=  Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
player_object.set({ 
    top:player_y,left:player_x
});
canvas.add(player_object);
    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
            block_img_object=Img;
            block_img_object.scaleToHeight(block_img_height);
            block_img_object.scaleToWidth(block_img_width);
            block_img_object.set({
                top:player_y,left:player_x
            });
            canvas.add(block_img_object);
    })
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);

if (keypress=='80'&&e.shiftKey==true) {
    console.log("P shift pressed together");
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;

    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}

if (keypress=='77'&&e.shiftKey==true) {
    console.log("M & shift pressed together");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;

    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}
if (keypress=='37') {

    left();
    console.log("Left is pressed");

}
if (keypress=='38') {

    up();
    console.log("Up is pressed");
    
}

if (keypress=='39') {

    right();
    console.log("Right is pressed");
    
}

if (keypress=='40') {

    down();
    console.log("Down is pressed");
    
}
if (keypress=='84') {
    new_img('trunk.jpg');
    console.log("T is pressed");
}

if (keypress=='68') {
    new_img('dark_green.png');
    console.log("D is pressed");
}

if (keypress=='76') {
    new_img('light_green.png');
    console.log("L is pressed");
}

if (keypress=='71') {
    new_img('ground.png');
    console.log("G is pressed");
}

if (keypress=='89') {
    new_img('yellow_wall.png');
    console.log("Y is pressed");
}

if (keypress=='82') {
    new_img('roof.jpg');
    console.log("R is pressed");
}

if (keypress=='85') {
    new_img('unique.png');
    console.log("U is pressed");
}

if (keypress=='67') {
    new_img('cloud.jpg');
    console.log("C is pressed");
}


}

function down(){
   if(player_y<=400){
player_y=player_y+block_img_height;
console.log("Height of block is"+block_img_height);
console.log("When down is pressed, x="+player_x+"& y="+player_y);
canvas.remove(player_object);
player_update();
   }
}
function up(){
    if (player_y>0) {
        player_y=player_y-block_img_height;
        console.log("Height of block is"+block_img_height);
        console.log("When up is pressed, x="+player_x+"& y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>0) {
        player_x=player_x-block_img_width;
        console.log("Width of the block is"+block_img_width);
        console.log("When left is pressed, x="+player_x+"& y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<=800) {
        player_x=player_x+block_img_width;
        console.log("Width of the block is"+block_img_width);
        console.log("When right is pressed, x="+player_x+"& y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
