//Are you 'h'appy or 'a'ngry???

//Setting up the project

function setup() {

  createCanvas(600, 800); // Sketch Size
  background(255);
}

function draw() {
  faceFrame();
  legs();
  hands();
  dress();
  


  if (key == 'h') {
    background(255, 233, 38); // yellow	
    
    faceFrame();
    legs();
    hands();
    dress();
    happyFace();
    happyEyes();
    happyDress(0);//change the type of pink color (0-200)
    happySmile();
    happyLashes(2);//Her inner eyes size (0-40)
    happyNose(5);// How wide is her nose
    happyHair();
    
    	
    translate(200,0);
    faceFrame();
    legs();
    hands();
    dress();
    happyFace();
    happyEyes();
    happyDress(100);//change the type of pink color (0-200)
    happySmile();
    happyLashes(15);//Her inner eyes size (0-40)
    happyNose(20);// How wide is her nose
    happyHair();
    
   
    translate(-400,0);
    faceFrame();
    legs();
    hands();
    dress();
    happyFace();
    happyEyes();
    happyDress(255);//change the type of pink color (0-200)
    happySmile();
    happyLashes(35);//Her inner eyes size (0-40)
    happyNose(40);// How wide is her nose
    happyHair();
 
  } else if (key == 'a') {
    background(75);
    //translate(400,0);
    faceFrame();
    legs();
    hands();
    dress();
    angryFace(0);// change her angry face color (0-255)
    angryEyes(4);// How wide her eyes are open (0-40)
    angryDress();
    angryMouth();
    angryEyebrows();
    angryClaws();
    angrySkull();
    
    translate(200,0);
    faceFrame();
    legs();
    hands();
    dress();
    angryFace(150);// change her angry face color (0-255)
    angryEyes(20);// How wide her eyes are open (0-40)
    angryDress();
    angryMouth();
    angryEyebrows();
    angryClaws();
    angrySkull();
    
    translate(-400,0);
    faceFrame();
    legs();
    hands();
    dress();
    angryFace(255);// change her angry face color (0-255)
    angryEyes(40);// How wide her eyes are open (0-40)
    angryDress();
    angryMouth();
    angryEyebrows();
    angryClaws();
    angrySkull();
  }



}





function faceFrame() {
  stroke(0);
  ellipseMode(CENTER);
  fill(255);
  ellipse(width / 2, height / 3, 200, 200); // girl's face
}

function legs() {
  stroke(0);
  fill(255);
  rect(280, 562, 22, 100); //R leg
  rect(303, 562, 22, 100); // L leg
}

function hands() {
  stroke(0);
  fill(255);
  quad(355, 440, 414, 408, 422, 431, 363, 460); // L hand
  quad(245, 440, 190, 408, 182, 431, 235, 460); // R hand
}

function dress() {
  stroke(0);
  fill(255);
  quad(286, 366, 320, 366, 411, 561, 177, 561); // Girl's dress`
}


function happyFace() {
  fill(255, 246, 144); // face color
  ellipse(width / 2, height / 3, 200, 200); // girl's face
}

function happyEyes() {
  fill(255);
  ellipse(236, 242, 40, 40); // R Eye
  ellipse(320, 242, 40, 40); // L Eye
}

function happyDress(pink) {
  fill(255, pink, 244); //Pink
  quad(286, 366, 320, 366, 411, 561, 177, 561); // Girl's dress`
}

function happySmile() {
  noFill();
  arc(278, 312, 60, 40, 0, PI + QUARTER_PI, OPEN); // Smile
}

function happyLashes(innerSize) {
  //Eyes
  stroke(0);
  strokeWeight(innerSize);
  point(234, 243);
  point(318, 242);

  //Eyelashes
  stroke(199, 96, 232);
  strokeWeight(1);
  line(225, 227, 220, 215);
  line(239, 222, 237, 208);
  line(252, 230, 259, 215);
  line(307, 228, 302, 215);
  line(319, 222, 319, 212);
  line(334, 230, 343, 222);
}

function happyNose(size) {
  //Nose
  ellipseMode(CENTER);
  stroke(0);
  fill(232, 152, 12);
  ellipse(276, 279, size, 20);
}

function happyHair() {
  //Hair
  stroke(255, 152, 70);
  strokeWeight(2);
  line(295, 167, 264, 183);
  line(295, 167, 290, 190);
  line(295, 167, 309, 183);
  line(295, 167, 277, 185);
  line(295, 167, 299, 185);
  line(295, 167, 314, 172);
  line(295, 167, 265, 176);
}

function angryFace(color) {
  fill(201, 179, color); // face color
  ellipse(width / 2, height / 3, 200, 200); // girl's face
}

function angryEyes(eyeOpen) {
  fill(200);
  ellipse(265, 242, 40, 40); // R Eye
  fill(255, 4, 29); //Red
  ellipse(265, 242,eyeOpen , 40);
  fill(200);
  ellipse(330, 242, 40, 40); // L Eye
  fill(255, 4, 29);

  ellipse(331, 242, eyeOpen, 40);
  stroke(0);
  strokeWeight(4);
  point(265, 243);
  point(331, 242);
}

function angryDress() {
  fill(0); //Black
  quad(286, 366, 320, 366, 411, 561, 177, 561); // Girl's dress
}

function angryMouth() {
  fill(255, 4, 29);
  strokeWeight(1);
  var myx = 266;
  // upper jaw
  triangle(myx, 300, myx + 15, 300, myx + 7, 321);
  triangle(myx + 15, 300, myx + 30, 300, myx + 22, 321);
  triangle(myx + 30, 300, myx + 45, 300, myx + 37, 321);
  triangle(myx + 45, 300, myx + 60, 300, myx + 52, 321);
  //lower jaw
  triangle(myx, 350, myx + 15, 350, myx + 7, 330);
  triangle(myx + 15, 350, myx + 30, 350, myx + 22, 330);
  triangle(myx + 30, 350, myx + 45, 350, myx + 37, 330);
  triangle(myx + 45, 350, myx + 60, 350, myx + 52, 330);
}

function angryEyebrows() {
  strokeWeight(4);
  line(266, 202, 291, 225);
  line(332, 202, 305, 225);
}

function angryClaws() {
  fill(255, 4, 29);
  strokeWeight(2);
  //R hand
  triangle(187, 414, 185, 430, 160, 340);
  triangle(187, 414, 185, 430, 129, 364);
  triangle(187, 414, 185, 430, 128, 413);
  //L Hand
  triangle(417, 414, 420, 430, 430, 340);
  triangle(417, 414, 420, 430, 465, 364);
  triangle(417, 414, 420, 430, 469, 413);
}

function angrySkull() {
  fill(255);
  //Bones
  quad(232, 523, 248, 536, 353, 464, 338, 436);
  quad(362, 523, 350, 536, 244, 464, 254, 436);
  //Face
  ellipseMode(CENTER);
  ellipse(298, 490, 90, 90);
  fill(0);
  //Eyes&Nose
  triangle(277, 477, 290, 477, 283, 462);
  triangle(306, 477, 319, 477, 313, 462);
  triangle(296, 487, 292, 496, 303, 496);
  //Mouth
  stroke(255);
  strokeWeight(1);
  //UpperJaw
  rect(286, 504, 4, 8);
  rect(290, 504, 4, 8);
  rect(294, 504, 4, 8);
  rect(298, 504, 4, 8);
  rect(302, 504, 4, 8);
  rect(306, 504, 4, 8);
  //Lower Jaw
  rect(286, 513, 4, 8);
  rect(290, 513, 4, 8);
  rect(294, 513, 4, 8);
  rect(298, 513, 4, 8);
  rect(302, 513, 4, 8);
  rect(306, 513, 4, 8);
}