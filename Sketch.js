const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

function preload(){
    morning= loadImage("GamingBackground.png");
    enemyfire= loadImage("Monster-01.png");
    enemy= loadImage("Monster-02.png");
    hero= loadImage("Superhero-01.png");
}
function setup(){
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
}
function draw(){
    Engine.update(engine);
}