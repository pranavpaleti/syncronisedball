var ball;
var database;
var reference;
var position;
function setup(){
    createCanvas(400,400);
    ball = createSprite(200,200,50,50);
    ball.shapeColor = "red"
    database=firebase.database();
    console.log(database);
    reference=database.ref('ball/position')
    reference.on("value",readposition,showError)
}
function draw(){
    background(0);
    if(position!==undefined){
        if(keyDown(UP_ARROW)){
            changepos(0,-1)
        }
        if(keyDown(DOWN_ARROW)){
            changepos(0,1)
        }
        if(keyDown(RIGHT_ARROW)){
            changepos(1,0)
        }
        if(keyDown(LEFT_ARROW)){
            changepos(-1,0)
        }
    }
    
    drawSprites();
}
function changepos(x,y){
database.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y
})
}
function showError(){
    console.log("error")
}
function readposition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}