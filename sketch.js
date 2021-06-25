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

// invisible sprites
var invisibleSpriteBottom;
var invisibleSpriteRight; 
var invisibleSpriteLeft; 

// coins for MunRun
var bronzeCoin, bronzeCoinImage; 
var silverCoin, silverCoinImage; 
var goldCoin, goldCoinImage; 

// banana 
var banana, bananaImage; 

//homepage button & scoreboard
var homepageButton, homepageButtonImage; 
var scoreboard, scoreboardImage; 

// Plastic Bags and Fire images
var PlasticBagImage, FireImage; 

// Plastic Bags for Levels 
var PlasticBagForLevel3; 
var PlasticBag1ForLevel4, PlasticBag2ForLevel4; 
var PlasticBag1ForLevel5, PlasticBag2ForLevel5; 
var PlasticBagForLevel9;
var PlasticBag1ForLevel10, PlasticBag2ForLevel10; 

// Fire for Levels 
var Fire6; 
var Fire17, Fire27; 
var Fire18, Fire28, Fire38; 
var Fire19, Fire29; 
var Fire110, Fire210; 

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
  bronzeCoinImage = loadImage("images/Coins/BronzeCoin.png");
  silverCoinImage = loadImage("images/Coins/SilverCoin.png");
  goldCoinImage = loadImage("images/Coins/GoldCoin.png"); 
  bananaImage = loadImage("images/Bananas/banana.png");
  homepageButtonImage = loadImage("images/Others/HomepageButton.png"); 
  scoreboardImage = loadImage("images/Others/Scoreboard for MunRun.png");
  FireImage = loadImage("images/Others/fire.png");
  PlasticBagImage = loadImage("images/Others/PlasticBag.png"); 

}

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  monkey.setCollider("circle",0,0,250);

  invisibleSpriteBottom = createSprite(displayWidth/2 + 300, displayHeight/2 + 200, 5000, 20);
  invisibleSpriteBottom.visible = false; 

  invisibleSpriteLeft = createSprite(displayWidth/2 - 315, displayHeight/2 + 180, 20, 5000); 
  invisibleSpriteLeft.visible = false; 

  invisibleSpriteRight = createSprite(displayWidth/2 + 615, displayHeight/2 + 180, 20, 5000);
  invisibleSpriteRight.visible = false; 

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

  bronzeCoin = createSprite(displayWidth/2 + 200, displayHeight/2 + 150, 50, 20);
  bronzeCoin.addImage(bronzeCoinImage); 
  bronzeCoin.scale = 0.75; 
  bronzeCoin.visible = false; 

  silverCoin = createSprite(displayWidth/2 + 300, displayHeight/2 + 150, 50, 20);
  silverCoin.addImage(silverCoinImage); 
  silverCoin.scale = 0.75; 
  silverCoin.visible = false; 

  goldCoin = createSprite(displayWidth/2 + 400, displayHeight/2 + 150, 50, 20);
  goldCoin.addImage(goldCoinImage); 
  goldCoin.scale = 0.75; 
  goldCoin.visible = false; 

  banana = createSprite(displayWidth/2 + 600, displayHeight/2 + 150, 50, 20); 
  banana.addImage(bananaImage);
  banana.scale = 0.1; 
  banana.visible = false; 

  homepageButton = createSprite(displayWidth/2 - 650, displayHeight/2 + 200, 50, 20); 
  homepageButton.addImage(homepageButtonImage);
  homepageButton.scale = 0.35; 
  homepageButton.visible = false; 

  scoreboard = createSprite(displayWidth/2 - 575, displayHeight/2 - 100, 50, 20);
  scoreboard.addImage(scoreboardImage);
  scoreboard.scale = 0.65; 
  scoreboard.visible = false; 

  PlasticBagForLevel3 = createSprite(displayWidth/2 + 350, displayHeight/2 + 150, 50, 20);
  PlasticBagForLevel3.addImage(PlasticBagImage);
  PlasticBagForLevel3.scale = 0.2; 
  PlasticBagForLevel3.visible = false; 

  PlasticBag1ForLevel4 = createSprite(displayWidth/2 + 350, displayHeight/2 + 150, 50, 20); 
  PlasticBag1ForLevel4.addImage(PlasticBagImage); 
  PlasticBag1ForLevel4.scale = 0.2; 
  PlasticBag1ForLevel4.visible = false; 
  
  PlasticBag2ForLevel4 = createSprite(displayWidth/2 + 150, displayHeight/2 + 150, 50, 20); 
  PlasticBag2ForLevel4.addImage(PlasticBagImage); 
  PlasticBag2ForLevel4.scale = 0.2; 
  PlasticBag2ForLevel4.visible = false; 

  PlasticBag1ForLevel5 = createSprite(displayWidth/2 + 125, displayHeight/2 + 150, 50, 20); 
  PlasticBag1ForLevel5.addImage(PlasticBagImage); 
  PlasticBag1ForLevel5.scale = 0.2;
  PlasticBag1ForLevel5.visible = false; 
  
  PlasticBag2ForLevel5 = createSprite(displayWidth/2 - 100, displayHeight/2 + 150, 50, 20); 
  PlasticBag2ForLevel5.addImage(PlasticBagImage); 
  PlasticBag2ForLevel5.scale = 0.2;
  PlasticBag2ForLevel5.visible = false; 

  Fire6 = createSprite(displayWidth/2 - 100, displayHeight/2 + 150, 50, 20);
  Fire6.addImage(FireImage);
  Fire6.scale = 0.2; 
  Fire6.visible = false; 

  Fire17 = createSprite(displayWidth/2 - 55, displayHeight/2 + 150, 50, 20);
  Fire17.addImage(FireImage);
  Fire17.scale = 0.2; 
  Fire17.visible = false; 
  
  Fire27 = createSprite(displayWidth/2 + 205, displayHeight/2 + 150, 50, 20);
  Fire27.addImage(FireImage);
  Fire27.scale = 0.2; 
  Fire27.visible = false; 
  
  Fire18 = createSprite(displayWidth/2 - 55, displayHeight/2 + 150, 50, 20);
  Fire18.addImage(FireImage);
  Fire18.scale = 0.2; 
  Fire18.visible = false; 
  
  Fire28 = createSprite(displayWidth/2 + 205, displayHeight/2 + 150, 50, 20);
  Fire28.addImage(FireImage);
  Fire28.scale = 0.2; 
  Fire28.visible = false; 

  Fire38 = createSprite(displayWidth/2 + 455, displayHeight/2 + 150, 50, 20);
  Fire38.addImage(FireImage);
  Fire38.scale = 0.2; 
  Fire38.visible = false; 

  PlasticBagForLevel9 = createSprite(displayWidth/2 - 55, displayHeight/2 + 150, 50, 20);
  PlasticBagForLevel9.addImage(PlasticBagImage);
  PlasticBagForLevel9.scale = 0.2; 
  PlasticBagForLevel9.visible = false; 

  Fire19 = createSprite(displayWidth/2 + 205, displayHeight/2 + 150, 50, 20);
  Fire19.addImage(FireImage);
  Fire19.scale = 0.2; 
  Fire19.visible = false; 

  Fire29 = createSprite(displayWidth/2 + 455, displayHeight/2 + 150, 50, 20);
  Fire29.addImage(FireImage);
  Fire29.scale = 0.2; 
  Fire29.visible = false; 

  PlasticBag1ForLevel10 = createSprite(displayWidth/2 + 455, displayHeight/2 + 150, 50, 20);  
  PlasticBag1ForLevel10.addImage(PlasticBagImage);
  PlasticBag1ForLevel10.scale = 0.2; 
  PlasticBag1ForLevel10.visible = false; 

  PlasticBag2ForLevel10 = createSprite(displayWidth/2 + 305, displayHeight/2 + 150, 50, 20);  
  PlasticBag2ForLevel10.addImage(PlasticBagImage);
  PlasticBag2ForLevel10.scale = 0.2; 
  PlasticBag2ForLevel10.visible = false; 

  Fire110 = createSprite(displayWidth/2 + 5, displayHeight/2 + 150, 50, 20);
  Fire110.addImage(FireImage);
  Fire110.scale = 0.2; 
  Fire110.visible = false; 

  Fire210 = createSprite(displayWidth/2 - 155, displayHeight/2 + 150, 50, 20);
  Fire210.addImage(FireImage);
  Fire210.scale = 0.2; 
  Fire210.visible = false; 
}

function draw() {
  background(174,229,224);

  if(gameState === "HOME"){

    monkey.visible = true; 
    morningHomePage.visible = true; 

    
    jungleBackground.visible = false; 
    bronzeCoin.visible = false; 
    silverCoin.visible = false;
    goldCoin.visible = false; 
    banana.visible = false; 
    homepageButton.visible = false;
    scoreboard.visible = false; 

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
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level2)){
      gameState = "Level2";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level3)){
      gameState = "Level3";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level4)){
      gameState = "Level4";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level5)){
      gameState = "Level5";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level6)){
      gameState = "Level6";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level7)){
      gameState = "Level7";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level8)){
      gameState = "Level8";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level9)){
      gameState = "Level9";
      monkey.y = displayHeight/2 + 160;
    }
    if(mousePressedOver(level10)){
      gameState = "Level10"; 
      monkey.y = displayHeight/2 + 160;
    }
  }

  if(gameState != "HOME"){

    jungleBackground.visible = true; 
    bronzeCoin.visible = true; 
    silverCoin.visible = true;
    goldCoin.visible = true; 
    banana.visible = true; 
    homepageButton.visible = true;
    scoreboard.visible = true; 

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
    
    monkey.velocityY =  monkey.velocityY + 0.8;

    if(monkey.isTouching(bronzeCoin)){
      bronzeCoin.visible = false; 
    }

    if(mousePressedOver(homepageButton)){
      gameState = "HOME"; 
    }
  }

  if(gameState != "HOME" && keyDown("space")){
    monkey.y = monkey.y - 30; 
  }

  if(gameState != "HOME" && keyDown("RIGHT_ARROW")){
    monkey.x = monkey.x + 5; 
  }

  if(gameState != "HOME" && keyDown("LEFT_ARROW")){
    monkey.x = monkey.x - 5; 
  }

  if(gameState === "Level1"){

    bronzeCoin.x = displayWidth/2 + 200; 
    bronzeCoin.y = displayHeight/2 + 150;

    silverCoin.x = displayWidth/2 + 300;
    silverCoin.y = displayHeight/2 + 150;

    goldCoin.x = displayWidth/2 + 400;
    goldCoin.y = displayHeight/2 + 150;
  }

  if(gameState === "Level2"){

    bronzeCoin.x = displayWidth/2 - 150; 
    bronzeCoin.y = displayHeight/2 + 150; 

    silverCoin.x = displayWidth/2 - 25; 
    silverCoin.y = displayHeight/2 + 100; 

    goldCoin.x = displayWidth/2 + 100; 
    goldCoin.y = displayHeight/2 + 125; 

  }

  if(gameState === "Level3"){
  
    PlasticBagForLevel3.visible = true; 

    bronzeCoin.x = displayWidth/2 - 150; 
    bronzeCoin.y = displayHeight/2 + 150; 

    silverCoin.x = displayWidth/2 - 25; 
    silverCoin.y = displayHeight/2 + 100; 

    goldCoin.x = displayWidth/2 + 100; 
    goldCoin.y = displayHeight/2 + 125; 
  }
  
  if(gameState === "Level4"){
     
    PlasticBag1ForLevel4.visible = true; 
    PlasticBag2ForLevel4.visible = true; 

    bronzeCoin.x = displayWidth/2 - 100; 
    bronzeCoin.y = displayHeight/2 + 100; 

    silverCoin.x = displayWidth/2 - 25; 
    silverCoin.y = displayHeight/2 + 100; 

    goldCoin.x = displayWidth/2 + 125; 
    goldCoin.y = displayHeight/2 + 75; 
  }

  if(gameState === "Level5"){

    PlasticBag1ForLevel5.visible = true; 
    PlasticBag2ForLevel5.visible = true; 
       
    bronzeCoin.x = displayWidth/2 - 100; 
    bronzeCoin.y = displayHeight/2 + 75; 

    silverCoin.x = displayWidth/2 - 25; 
    silverCoin.y = displayHeight/2 + 75; 

    goldCoin.x = displayWidth/2 + 250; 
    goldCoin.y = displayHeight/2 + 75; 
  }
  
  if(gameState === "Level6"){

    Fire6.visible = true; 
           
    bronzeCoin.x = displayWidth/2 - 5; 
    bronzeCoin.y = displayHeight/2 + 75; 

    silverCoin.x = displayWidth/2 - 25; 
    silverCoin.y = displayHeight/2 + 150; 

    goldCoin.x = displayWidth/2 + 300; 
    goldCoin.y = displayHeight/2 + 100; 
  }
  
  if(gameState === "Level7"){

    Fire17.visible = true; 
    Fire27.visible = true; 
               
    bronzeCoin.x = displayWidth/2 - 5; 
    bronzeCoin.y = displayHeight/2 + 100; 

    silverCoin.x = displayWidth/2 + 100; 
    silverCoin.y = displayHeight/2 + 150; 

    goldCoin.x = displayWidth/2 + 100; 
    goldCoin.y = displayHeight/2 + 100; 
  }
  
  if(gameState === "Level8"){

    Fire18.visible = true; 
    Fire28.visible = true; 
    Fire38.visible = true; 
                 
    bronzeCoin.x = displayWidth/2 - 5; 
    bronzeCoin.y = displayHeight/2 + 100; 

    silverCoin.x = displayWidth/2 + 100; 
    silverCoin.y = displayHeight/2 + 150; 

    goldCoin.x = displayWidth/2 + 100; 
    goldCoin.y = displayHeight/2 + 100; 
  }
  
  if(gameState === "Level9"){

    PlasticBagForLevel9.visible = true; 
    Fire19.visible = true; 
    Fire29.visible = true; 
                 
    bronzeCoin.x = displayWidth/2 - 10; 
    bronzeCoin.y = displayHeight/2 + 50; 

    silverCoin.x = displayWidth/2 + 400; 
    silverCoin.y = displayHeight/2 + 100; 

    goldCoin.x = displayWidth/2 + 100; 
    goldCoin.y = displayHeight/2 + 100; 
  }
  
  if(gameState === "Level10"){

    PlasticBag1ForLevel10.visible = true; 
    PlasticBag2ForLevel10.visible = true; 
    Fire110.visible = true; 
    Fire210.visible = true; 
                  
    bronzeCoin.x = displayWidth/2 - 100; 
    bronzeCoin.y = displayHeight/2 + 50; 

    silverCoin.x = displayWidth/2 + 200; 
    silverCoin.y = displayHeight/2 + 100; 

    goldCoin.x = displayWidth/2 + 350; 
    goldCoin.y = displayHeight/2 + 25; 
  }
  
  monkey.collide(invisibleSpriteBottom);
  monkey.collide(invisibleSpriteLeft);
  monkey.collide(invisibleSpriteRight); 

  drawSprites(); 
}