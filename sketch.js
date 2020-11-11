  
  var playgroundImage, playground;
  var bow, bowImage;
  var balloon1, balloon1Image, balloonA;
  var balloon2, balloo2Image, balloonB;
  var balloon3, balloon3Image, balloonC;
  var balloon4, balloon4Image, balloonD;
  var selectBalloon;
  var score;
  var arrow, arrowGroup, arrowImage;
  


function preload(){
 //load your images here 

 playgroundImage = loadImage("background0.png") 
 arrowImage = loadImage("arrow0.png"); 
 bowImage = loadImage("bow0.png");
 balloon1Image = loadImage("red_balloon0.png"); 
 balloon2Image = loadImage("pink_balloon0.png");
 balloon3Image = loadImage("green_balloon0.png");
 balloon4Image = loadImage("blue_balloon0.png");


}

function setup() {
  //add code here
  createCanvas(600, 600);
      
  playground = createSprite(0, 0, 700, 600);
  playground.addImage("playground", playgroundImage);
  playground.scale = 3;
  playground.velocityX = -9;
  
  bow = createSprite(557,300,10,10) 
  bow.addImage("bow", bowImage);
  bow.scale = 1.5;
 
  score = 0;
  
  arrowGroup = new Group();
  balloonA= new Group();
  balloonB= new Group();
  balloonC= new Group();
  balloonD= new Group();
    
}

function draw() { 

  //add code here
 if (playground.x < 0) {
    playground.x = playground.width / 2;
  }
  
  bow.y = mouseY
 if (keyDown("space")) {
  arrow();    
  } 
  
  if (arrowGroup .isTouching(balloonA)){
     balloonA.destroyEach();
     arrowGroup.destroyEach();
    score = score+1;
     }
  
  if (arrowGroup .isTouching(balloonC)){
     balloonC.destroyEach();
     arrowGroup.destroyEach();
    score = score+4;
     }
 
  if (arrowGroup .isTouching(balloonB)){
     balloonB.destroyEach();
     arrowGroup.destroyEach();
     score = score+3;
     }
  
  if (arrowGroup .isTouching(balloonD)){
     balloonD.destroyEach();
     arrowGrou .destroyEach();
    score = score+2;
     }
 
  var selectBalloon = Math.round(random(1, 4));
  console.log(selectBalloon);
  
  if(World.frameCount % 80 === 0){
    if(selectBalloon == 1){
      balloon1();
    }else if(selectBalloon == 2){
      balloon2();
    }else if(selectBalloon == 3){
      balloon3();
    }else{
      balloon4();
    }
  }
  
   text("score : " + score,270, 30);
  textSize(20);
    
  drawSprites()
}

function balloon1(){
  var balloon1 = createSprite(0, Math.round(random(20, 370)),10, 10) ;
  balloon1.addImage(balloon1Image);
  balloon1.velocityX = 3;
  balloon1.lifetime = 150;
  balloon1.scale = 0.1; 
  balloonA.add(balloon1);
}

function balloon2(){
  var balloon2 = createSprite(0, Math.round(random(20, 370)),10, 10) ;
  balloon2.addImage(balloon2Image);
  balloon2.velocityX = 3;
  balloon2.lifetime = 150;
  balloon2.scale = -1.5;
  balloon2.rotation = -180;
  balloonB.add(balloon2);
}

function balloon3(){
  var balloon3 = createSprite(0, Math.round(random(20, 370)),10, 10) ;
  balloon3.addImage(balloon3Image);
  balloon3.velocityX = 3;
  balloon3.lifetime = 150;
  balloon3.scale = -0.10;
  balloon3.rotation = -180;
  balloonC.add(balloon3);
}  
function balloon4(){
  var balloon4 = createSprite(0, Math.round(random(20, 370)),10, 10) ;
  balloon4.addImage(balloon4Image);
  balloon4.velocityX = 3;
  balloon4.lifetime = 150;
  balloon4.scale = -0.10;
  balloon4.rotation = -180;
  balloonD.add(balloon4);
} 

function arrow(){
  var arrow = createSprite(527,300,10,10) 
  arrow.addImage("arrow", arrowImage);
  arrow.scale = -0.5;
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4
  arrow.lifetime = 100;
  arrow.rotation = -180;
  arrowGroup.add(arrow);
  
}  


  

