//creating bird class and connecting it to the baseclass with keyword extend
class Pig extends BaseClass
{
  //making the constructor of Pig class
constructor(x,y)
{
  //calling the constructor of base class
 super(x,y,50,50); 
 this.image = loadImage("sprites/enemy.png");
}
}
