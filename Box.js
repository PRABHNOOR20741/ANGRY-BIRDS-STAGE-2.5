//creating bird class and connecting it to the baseclass with keyword extend
class Box extends BaseClass
{
   //making the constructor of Box class
  constructor(x,y,width,height)
  {
    //calling the constructor of base class
   super(x,y,width,height); 
   this.image = loadImage("sprites/wood1.png");
  }
}