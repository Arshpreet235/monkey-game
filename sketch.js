
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,survivalTiime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);

   monkey=createSprite(80,315,20,20);
  monkey.addAnimation('moving',monkey_running);
  monkey.scale=0.1;

  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4 ;
 
   ground.X=ground.width/2;
  score= 0 ;
  survivalTime=0 ; 
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background(220);
 
    stroke("black");
    fill("black");
      textSize(20);
  
  text("Survival Time:"+  survivalTime, 100, 50);
  
  
  stroke("black");
    fill("black");
      textSize(20);
  text("Score:"+  score, 300,50 );
  
   
    if(obstacleGroup.isTouching(monkey)){
        
         obstacleGroup.destroyEach();
      
    
    }
  
  
      if(FoodGroup.isTouching(monkey)) {
      FoodGroup.destroyEach();
      score = score+1;
    }
   
  
  if(keyDown('space')&& monkey.y >= 300){
    
    monkey.velocityY=-12;
    
    
  }
  food();
  obstacles();
monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  drawSprites();
}
  function food(){
    if (frameCount % 150 ===0){
     banana = createSprite(400,350,40,10); 
      banana.addImage(bananaImage)
      banana.y = Math.round(random(180,270));
      banana.scale=0.1;
      banana.velocityX=-3;
   
      banana.lifetime = 200;
    
      FoodGroup.add(banana);
      
    } 
    
    
    
    
  }
  function obstacles(){
    if(frameCount % 180===0){
     obstacle = createSprite(250,325,10,10) ;
      obstacle.addImage(  obstaceImage);
       obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
      
    }
    
    
    
    
  }
  







