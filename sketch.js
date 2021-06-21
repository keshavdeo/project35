//Create variables here
var dog,happyDog,database,food,foodstock;
function preload()
{
	//load images here
  //this.image = loadImage("sprits/doglmg.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);

  dog= createSprite(250,250,20,20)
  //addImage =this.image;
  foodstock=database.ref("food")
  foodstock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writestock(food);
    dog.addImage(doghappy);
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  food=data.val();

}
function writestock(x){
  if(x<=0){
    x=0;
    
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
  })
}

