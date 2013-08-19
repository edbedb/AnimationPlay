
window.addEventListener('load',eventWindowLoaded,false);
			
function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {
	
	function drawScreen() {
		context.fillStyle= '#EEEEEE';
		context.fillRect(0,0,theCanvas.width, theCanvas.height);
		context.strokeStyle = '#00000000';
		context.strokeRect(1,1,theCanvas.width-2, theCanvas.height-2);
		context.fillStyle = "#000000";

		for (var i=0;i<balls.length;++i){
			ball = balls[i];
			ball.x += ball.xunits;
			ball.y += ball.yunits;
			context.beginPath();
			context.arc(ball.x, ball.y,ball.radius,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if (ball.x > theCanvas.width || ball.x < 0){
				ball.angle = 180-ball.angle;
				updateBall(ball);
			}
			else if (ball.y > theCanvas.height || ball.y < 0){
				ball.angle = 360 - ball.angle;
				updateBall(ball);
			}
		}
	}
	
	var theCanvas=document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
		
	var tempBall;
	var ball;
	var numBalls = 100;
	var maxSize = 8;
	var minSize = 5;
	var maxSpeed = maxSize + 5;
	var balls = new Array();
    var tempX, tempY;
    var tempSpeed, tempAngle;
    var tempRadius, tempRadians;
    var tempXunits, tempYunits;
	var angle = 35;
	var radians = 0;
	var xunits = 0;
	var yunits = 0;
	
	for (var i=0; i < numBalls; ++i){
		tempRadius = Math.floor(Math.random()*maxSize) + minSize;
		tempX = tempRadius * 2 + Math.floor(Math.random() * theCanvas.width)-(tempRadius*2);
		tempY = tempRadius * 2 + Math.floor(Math.random() * theCanvas.height)-(tempRadius*2);
		tempSpeed = maxSpeed - tempRadius;
		tempAngle = Math.floor(Math.random() * 360);
		tempRadians = tempAngle * Math.PI / 180;
		tempXunits = Math.cos(tempRadians) * tempSpeed;
		tempYunits = Math.sin(tempRadians) * tempSpeed;
		tempBall = {x:tempX, y:tempY, radius:tempRadius, speed:tempSpeed, angle:tempAngle,
			xunits:tempXunits, yunits:tempYunits};
		balls.push(tempBall);

	}
	//updateBall();
	
	function updateBall(ball){
		ball.radians =ball.angle *  Math.PI/180;
		ball.xunits = Math.cos(ball.radians) * ball.speed;
		ball.yunits = Math.sin(ball.radians) * ball.speed;
	}
	function gameLoop() {
		window.setTimeout(gameLoop,20);
		drawScreen();
	}
	gameLoop();
}
		

	