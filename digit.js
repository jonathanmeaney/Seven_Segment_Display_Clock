class Digit{
  // seven segments
  constructor(number, position, options){
    options = options || {};
    this.number = number;
    this.position = position;
    this.width = options.width || 50;
    this.height = options.height || 100;
    this.segmentHeight = options.segmentHeight || 10;

    const horizontalSegmentWidth = floor(this.width - (2 * this.segmentHeight));
    const verticalSegmentHeight = floor((this.height - (3 * this.segmentHeight)) / 2);

    // The segments are placed in a particular layout with each segment being called a different letter.
    // The segment layout and names is below:
    //     AAAAAAAA
    //     AAAAAAAA
    // FFFF        BBBB
    // FFFF        BBBB
    // FFFF        BBBB
    // FFFF        BBBB
    // FFFF        BBBB
    //     GGGGGGGG
    //     GGGGGGGG
    // EEEE        CCCC
    // EEEE        CCCC
    // EEEE        CCCC
    // EEEE        CCCC
    // EEEE        CCCC
    //     DDDDDDDD
    //     DDDDDDDD


    // Some common positions used to place segments
    const centerSideX = this.position.x + this.segmentHeight;
    const rightSideX = (this.position.x + this.width) - this.segmentHeight;
    const upperSideY = this.position.y + this.segmentHeight;
    const lowerSideY = this.position.y + (2 * this.segmentHeight);

    // Detemine the position for each segment and create a new segment for each side
    const aPosition = new Position(centerSideX, this.position.y);
    // bitwise shift the hexadecimal number to determine if the specific segment should be illiminated
    const aIlluminate = (this.num >> 6) & 1;
    this.aSegment = new Segment(aPosition, horizontalSegmentWidth, this.segmentHeight, aIlluminate);

    const bPosition = new Position(rightSideX, upperSideY);
    const bIlluminate = (this.num >> 5) & 1;
    this.bSegment = new Segment(bPosition, this.segmentHeight, verticalSegmentHeight, bIlluminate);

    const cPosition = new Position(rightSideX, lowerSideY + verticalSegmentHeight);
    const cIlluminate = (this.num >> 4) & 1;
    this.cSegment = new Segment(cPosition, this.segmentHeight, verticalSegmentHeight, cIlluminate);

    const dPosition = new Position(centerSideX, lowerSideY + (2 * verticalSegmentHeight));
    const dIlluminate = (this.num >> 3) & 1;
    this.dSegment = new Segment(dPosition, horizontalSegmentWidth, this.segmentHeight, dIlluminate);

    const ePosition = new Position(this.position.x, lowerSideY + verticalSegmentHeight);
    const eIlluminate = (this.num >> 2) & 1;
    this.eSegment = new Segment(ePosition, this.segmentHeight, verticalSegmentHeight, eIlluminate);

    const fPosition = new Position(this.position.x, upperSideY);
    const fIlluminate = (this.num >> 1) & 1;
    this.fSegment = new Segment(fPosition, this.segmentHeight, verticalSegmentHeight, fIlluminate);

    const gPosition = new Position(centerSideX, upperSideY + verticalSegmentHeight);
    const gIlluminate = (this.num >> 0) & 1;
    this.gSegment = new Segment(gPosition, horizontalSegmentWidth, this.segmentHeight, gIlluminate);
  }

  show(){
    // Call show on each of the named segments.
    this.aSegment.show();
    this.bSegment.show();
    this.cSegment.show();
    this.dSegment.show();
    this.eSegment.show();
    this.fSegment.show();
    this.gSegment.show();
  }

  // Get the hexadimal encoding associated with the supplied number
  get num(){
    return this.nums[this.number];
  }

  // Array of hexadecimal encodings for displaying digits 0 - 9 (gotten from https://en.wikipedia.org/wiki/Seven-segment_display)
  get nums(){
    return [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
  }
}