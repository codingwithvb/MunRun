// declaring background variables
var morningHomePage, morningHomePageImage; 
var nightHomePage, nightHomePageImage;  
var jungleBackground, jungleBackgroundImage; 

// Game States for MunRun
var gameState = "HOME"; 

// declare monkey variable  
var monkey, monkeyAnimation;

// declare variales for the Level Sprites
var level1, level1Image; 
var level2, level2Image; 
var level3, level3Image; 
var level4, level4Image;
var level5, level5Image;
var level6, level6Image;
var level7, level7Image;
var level8, level8Image;
var level9, level9Image;
var level10, level10Image;

function preload(){

  monkeyAnimation = loadAnimation("images/MonkeyAnimations/Monkey_01.png","images/MonkeyAnimations/Monkey_02.png","images/MonkeyAnimations/Monkey_03.png","images/MonkeyAnimations/Monkey_04.png","images/MonkeyAnimations/Monkey_05.png","images/MonkeyAnimations/Monkey_06.png","images/MonkeyAnimations/Monkey_07.png","images/MonkeyAnimations/Monkey_08.png","images/MonkeyAnimations/Monkey_09.png","images/MonkeyAnimations/Monkey_10.png");
  morningHomePageImage = loadImage("images/Others/Homepage.png"); 
  nightHomePageImage = loadImage("images/Others/HomepageNight.png"); 
  jungleBackgroundImage = loadImage("images/Background/jungle.jpg");
  level1Image = loadImage("images/LevelImages/Level1.png"); 
  level2Image = loadImage("images/LevelImages/Level2.png");
  level3Image = loadImage("images/LevelImages/Level3.png");
  level4Image = loadImage("images/LevelImages/Level4.png");
  level5Image = loadImage("images/LevelImages/Level5.png");
  level6Image = loadImage("images/LevelImages/Level6.png");
  level7Image = loadImage("images/LevelImages/Level7.png");
  level8Image = loadImage("images/LevelImages/Level8.png");
  level9Image = loadImage("images/LevelImages/Level9.png");
  level10Image = loadImage("images/LevelImages/Level10.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);

  morningHomePage = createSprite(displayWidth/2 - 100, displayHeight/2 - 50);
  morningHomePage.addImage(morningHomePageImage);
  morningHomePage.scale = 1.25; 
  morningHomePage.visible = false; 
  
  nightHomePage = createSprite(displayWidth/2 - 100, displayHeight/2 - 50);
  nightHomePage.addImage(nightHomePageImage);
  nightHomePage.scale = 1.25; 
  nightHomePage.visible = false; 

  jungleBackground = createSprite(displayWidth/2 + 150, displayHeight/2 - 50); 
  jungleBackground.addImage(jungleBackgroundImage);
  jungleBackground.scale = 0.965; 
  jungleBackground.visible = false; 

  monkey = createSprite(displayWidth/2 - 50,displayHeight/2 + 50,20,50);
  monkey.addAnimation("monkey", monkeyAnimation);
  monkey.scale = 0.15;
  monkey.visible = false;
  monkey.setCollider("circle",20,20,60);

  levelSheet = createSprite(displayWidth/2 + 320, displayHeight/2 - 50, 4100, 4175);
  levelSheet.shapeColor = "black"; 
  levelSheet.visible = false; 
  levelSheet.scale = 0.15;  

  level1 = createSprite(displayWidth/2 + 175, displayHeight/2 - 300, 50, 20); 
  level1.addImage(level1Image);
  level1.visible = false; 
  level1.scale = 0.25; 
  
  level2 = createSprite(displayWidth/2 + 300, displayHeight/2 - 300, 50, 20); 
  level2.addImage(level2Image);
  level2.visible = false; 
  level2.scale = 0.25; 
  
  level3 = createSprite(displayWidth/2 + 425, displayHeight/2 - 300, 50, 20); 
  level3.addImage(level3Image);
  level3.visible = false; 
  level3.scale = 0.25; 

  level4 = createSprite(displayWidth/2 + 175, displayHeight/2 - 125, 50, 20); 
  level4.addImage(level4Image);
  level4.visible = false; 
  level4.scale = 0.25; 
  
  level5 = createSprite(displayWidth/2 + 300, displayHeight/2 - 125, 50, 20); 
  level5.addImage(level5Image);
  level5.visible = false; 
  level5.scale = 0.25; 
  
  level6 = createSprite(displayWidth/2 + 425, displayHeight/2 - 125, 50, 20); 
  level6.addImage(level6Image);
  level6.visible = false; 
  level6.scale = 0.25; 

  level7 = createSprite(displayWidth/2 + 175, displayHeight/2 + 50, 50, 20); 
  level7.addImage(level7Image);
  level7.visible = false; 
  level7.scale = 0.25; 
  
  level8 = createSprite(displayWidth/2 + 300, displayHeight/2 + 50, 50, 20); 
  level8.addImage(level8Image);
  level8.visible = false; 
  level8.scale = 0.25; 
  
  level9 = createSprite(displayWidth/2 + 425, displayHeight/2 + 50, 50, 20); 
  level9.addImage(level9Image);
  level9.visible = false; 
  level9.scale = 0.25; 
 
  level10 = createSprite(displayWidth/2 + 300, displayHeight/2 + 200, 50, 20); 
  level10.addImage(level10Image);
  level10.visible = false; 
  level10.scale = 0.25; 
}

function draw() {
  background(174,229,224);

  if(gameState === "HOME"){

    monkey.visible = true; 
    morningHomePage.visible = true; 

    if(frameCount % 50 <= 0){

      morningHomePage.destroy(); 
      nightHomePage.visible = true; 

      if(frameCount % 100 <=0){

      levelSheet.visible = true;

      level1.visible = true; 
      level2.visible = true; 
      level3.visible = true; 
      level4.visible = true; 
      level5.visible = true; 
      level6.visible = true; 
      level7.visible = true; 
      level8.visible = true; 
      level9.visible = true; 
      level10.visible = true; 

      nightHomePage.x = displayWidth/2 - 300; 
      monkey.x = displayWidth/2 - 250;
      }
    }

    if(mousePressedOver(level1)){
      gameState = "Level1"; 
    }
    if(mousePressedOver(level2)){
      gameState = "Level2";
    }
    if(mousePressedOver(level3)){
      gameState = "Level3";
    }
    if(mousePressedOver(level4)){
      gameState = "Level4";
    }
    if(mousePressedOver(level5)){
      gameState = "Level5";
    }
    if(mousePressedOver(level6)){
      gameState = "Level6";
    }
    if(mousePressedOver(level7)){
      gameState = "Level7";
    }
    if(mousePressedOver(level8)){
      gameState = "Level8";
    }
    if(mousePressedOver(level9)){
      gameState = "Level9";
    }
    if(mousePressedOver(level10)){
      gameState = "Level10"; 
    }

  }
 
  if(gameState === "Level1"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }

  if(gameState === "Level2"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }

  if(gameState === "Level3"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  
  if(gameState === "Level4"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }

  if(gameState === "Level5"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  
  if(gameState === "Level6"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  
  if(gameState === "Level7"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  
  if(gameState === "Level8"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  
  if(gameState === "Level9"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  
  if(gameState === "Level10"){

    jungleBackground.visible = true; 

    level1.visible = false; 
    level2.visible = false; 
    level3.visible = false; 
    level4.visible = false; 
    level5.visible = false; 
    level6.visible = false; 
    level7.visible = false; 
    level8.visible = false; 
    level9.visible = false; 
    level10.visible = false; 
    levelSheet.visible = false; 
    nightHomePage.visible = false; 

    monkey.y = displayHeight/2 + 160;  

  }
  

  drawSprites(); 
}