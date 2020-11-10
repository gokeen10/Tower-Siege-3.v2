const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var ground1, ground2, ground3;
var slingshot1, hexagon1;

var score = 0;


function setup() {
  var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;



  push(); 
  fill ("pink"); 
  box1=new Box(450,500,50,50); 
  box2 = new Box(500,500,50,50); 
  box3 = new Box(550,500,50,50); 
  box4 = new Box(600,500,50,50); 
  box5 = new Box(650,500,50,50); 
  box6 = new Box(700,500,50,50); 
  box7 = new Box(750,500,50,50);
  pop ();
  
  box8=new Box(500,400,50,50); 
  box9=new Box(550,400,50,50); 
  box10=new Box(600,400,50,50); 
  box11=new Box(650,400,50,50); 
  box12=new Box(700,400,50,50);
  box13=new Box(550,400,50,50); 
  box14=new Box(600,400,50,50); 
  box15=new Box(650,400,50,50); 
  box16=new Box(600,400,50,50); 
  box17 = new Box(820,200,40,40); 
  box18 = new Box(860,200,40,40); 
  box19 = new Box(900,200,40,40); 
  box20 = new Box(940,200,40,40); 
  box21 = new Box(980,200,40,40); 
  box22 = new Box(860,200,40,40); 
  box23 = new Box(900,200,40,40); 
  box24 = new Box(940,200,40,40); 
  box25 = new Box(900,150,40,40);

  hexagon1=new hexagon(150,500,30);
   slingshot1=new slingShot(hexagon1.body,{x:150,y:500});
    ground1=new ground(600,600,370,10);
    ground2=new ground(600,780,1200,20); 
    ground3 = new ground(900,300,220,10);
    Engine.run(engine);
}

function draw() {
  background(0);  
  
  text("SCORE : " + score, 750, 40);


  ground1.display();
  ground2.display();
  ground3.display();
  push();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  pop();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  slingshot1.display();
  hexagon1.display();


  drawSprites();
}

function mouseDragged() { 
  Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
 } 
  
function mouseReleased() { 
    slingshot1.fly(); 
  }

  