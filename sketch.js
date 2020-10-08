//Create variables here
var dog,happydogImage,FoodS,FoodStock;
var database;
var dogImage;
function preload()
{
  //load images here
 dogImage=loadImage("Dog.png")
happydogImage=loadImage("happydog.png")
  
}

function setup() {
	
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.5;
  FoodStock=database.ref('Food')
  FoodStock.on("value",readStock)
  
}


function draw() {  
background(255);

  
  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS)
    dog.addImage(happydogImage)
  }
  //add styles here
  drawSprites();
}
function readStock(data){
  FoodS=data.val()
}
function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}

