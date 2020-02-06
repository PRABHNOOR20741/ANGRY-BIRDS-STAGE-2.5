//creating bird class and connecting it to the baseclass with keyword extend
class Log extends BaseClass
{
  //creating the constructor of Log class
 constructor(x,y,height,angle) 
 {
   //calling the constructor of parent class
super(x,y,20,height,angle);
this.image = loadImage("sprites/wood2.png");

//setting the angles for the logs
Matter.Body.setAngle(this.body, angle);
 }
}