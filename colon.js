// Class to define a colon between the digit sets
class Colon{
  constructor(position, options){
    options = options || {};
    this.position = position;
    this.width = options.width || 25;
    this.height = options.height || 100;
    this.circleWidth = options.circleWidth || 15;
    this.illuminate = true;
    
    // get the center point of the colon boundary
    const colonCenter = new Position(this.position.x + floor(this.width/2), this.position.y + floor(this.height/2));
    // space each circle evenly above and below the center point
    this.topCirclePosition = new Position(colonCenter.x, colonCenter.y - 2*floor(this.circleWidth / 2));
    this.bottomCirclePosition = new Position(colonCenter.x, colonCenter.y + 2*floor(this.circleWidth / 2));
  }
  
  show(){
    fill(255, 0, 0, this.illuminate ? 255 : 40);
    circle(this.topCirclePosition.x, this.topCirclePosition.y, this.circleWidth);
    circle(this.bottomCirclePosition.x, this.bottomCirclePosition.y, this.circleWidth);
  }
}