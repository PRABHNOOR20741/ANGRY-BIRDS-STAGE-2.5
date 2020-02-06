//creating bird class and connecting it to the baseclass with keyword extend
class Bird extends BaseClass
{
  //creating the constructor of Bird class
  constructor(x,y)
  {
    //calling the constructor of the parent(base) class
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  //creating the display function for bird class with moving it with mouse
  display()
  {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}