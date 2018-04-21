
if (!('webkitSpeechRecognition' in window)) {
  console.log('GOOGLE: not working on this browser');
} else {
  console.log('GOOGLE: working');
}
var sp = new p5.SpeechRec();

function setup(){
createCanvas(400,400);
background(255,0,0);
noFill();
sp.onResult = changeColor;
}

function draw(){

}


function changeColor(){
	console.log(resultString);
	if(sp.resultString == "red"){
		background(255, 0, 0);
	}
	if(sp.resultString == "green"){
		background(32, 254, 0);
	}
	if(sp.resultString == "blue"){
		background(0, 0, 249);
	}
}


function keyPressed(){
	if(keyCode === 32){
		sp.start();
	}
}


