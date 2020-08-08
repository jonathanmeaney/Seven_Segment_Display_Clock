// Class that represents a display segment.
class Segment{
  constructor(position, width, height, illuminate = false){
    this.position = position;
    this.width = width;
    this.height = height;
    this.illuminate = illuminate;
  }
  
  show(){
    fill(255, 0, 0, this.illuminate ? 255 : 40);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
