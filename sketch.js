//string

var string = "this is a string";
console.log(string);

//number
var num = 50;
console.log(num);

//boolean
var bool = true;
console.log(bool);

//undefined
var abc;
console.log(abc);

//reassigning to null
abc = null;
console.log(abc);

var arr1 = ["name",56,78,08];
console.log(arr1);
console.log(arr1[2]);

var arr2 = [[1,2],[3,4],[5,6]]

arr1.pop("vyom");
console.log(arr1)












const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate ="onsling "

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(810,258,70,70);
    box2 = new Box(811,258,70,70);
    

    box3 = new Box(812,258,70,70);
    box4 = new Box(813,258,70,70);
    box5 = new Box(814,258,70,70);
    
    box6 = new Box(815,258,70,70);
    box7 = new Box(816,258,70,70);
    
    
    box8 = new Box(700,240,70,70);
    box9 = new Box(920,240,70,70);
    box10 = new Box(810,160,70,70);

    box11 = new Box(700,320,70,70);
    box12 = new Box(920,320,70,70);
    

    box13 = new Box(700,240,70,70);
    box14 = new Box(920,240,70,70);
    box15 = new Box(810,160,70,70);

    box16 = new Box(700,320,70,70);
    box17 = new Box(920,320,70,70);
    

    box18 = new Box(700,240,70,70);
    box19 = new Box(920,240,70,70);
    box20 = new Box(810,160,70,70);

    box21 = new Box(700,320,70,70);
    box22 = new Box(920,320,70,70);
  

    box23 = new Box(700,240,70,70);
    box24 = new Box(920,240,70,70);
    box25 = new Box(810,160,70,70);
    
    

    log1 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);

   
   

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("brown");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    log1.display();

    box3.display();
    box4.display();

    log3.display();

    box5.display();
    

    bird.display();
  
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
     if(gamestate !== "launched" ){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}}


function mouseReleased(){
    slingshot.fly();
    gamestate="launched "
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}