let digitHour0, digitHour1, digitMinute0, digitMinute1, digitSecond0, digitSecond1;
let colon1, colon2;

function setup() {
  createCanvas(395, 110);
}

function draw() {
  background(51);
  
  const time = new Date();
  
  // Each segment of the clock should be 2 digits long.
  let hours = time.getHours();
  let hour0 = Number(hours.toString()[0]);
  let hour1 = Number(hours.toString()[1]);
  // For 1 - 9 hour0 will be the hour and hour1 will be undefined.
  // So in this scenario check if hour1 is NaN and if so set hour0 to 0 and
  // set hour1 to be what hour0 was.
  if(isNaN(hour1)){
    const temp = hour0;
    hour0 = 0;
    hour1 = temp;
  }
  let minutes = time.getMinutes();
  let minute0 = Number(minutes.toString()[0]);
  let minute1 = Number(minutes.toString()[1]);
  // For 1 - 9 minute0 will be the minute and minute1 will be undefined.
  // So in this scenario check if minute1 is NaN and if so set minute0 to 0 and
  // set minute1 to be what minute0 was.
  if(isNaN(minute1)){
    const temp = minute0;
    minute0 = 0;
    minute1 = temp;
  }
  let seconds = time.getSeconds();
  let second0 = Number(seconds.toString()[0]);
  let second1 = Number(seconds.toString()[1]);
  // For 1 - 9 second0 will be the second and second1 will be undefined.
  // So in this scenario check if second1 is NaN and if so set second0 to 0 and
  // set second1 to be what second0 was.
  if(isNaN(second1)){
    const temp = second0;
    second0 = 0;
    second1 = temp;
  }

  // Create digits for hours
  digitHour0 = new Digit(hour0, new Position(5,5));
  digitHour1 = new Digit(hour1, new Position(60,5));
  colon1 = new Colon(new Position(115, 5));
  // Create digits for minutes
  digitMinute0 = new Digit(minute0, new Position(145,5));
  digitMinute1 = new Digit(minute1, new Position(200,5));
  colon2 = new Colon(new Position(255, 5));
  // Create digits for seconds
  digitSecond0 = new Digit(second0, new Position(285,5));
  digitSecond1 = new Digit(second1, new Position(340,5));
  
  // Show Hours
  digitHour0.show();
  digitHour1.show();
  colon1.show();
  // Show Minutes
  digitMinute0.show();
  digitMinute1.show();
  colon2.show();
  // Show Seconds
  digitSecond0.show();
  digitSecond1.show();
}
