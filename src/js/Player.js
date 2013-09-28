//Player Class

function Player(amplitudeX, amplitudeY, speed, posMovementStart, posX, posY, sprite) {
	this.amplitudeX = amplitudeX;
	this.amplitudeY = amplitudeY;
	this.speed = speed;
	this.posMovementStart = posMovementStart;
	this.posX = posX;
	this.posY = posY;
	this.sprite = sprite;
	
	//Update
	this.update = function(){
		if (playerWalkingInCircle==1 && this.posX.toFixed(1) != 390.0 && this.posY.toFixed(1) != 60.0){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
		else if (playerWalkingInCircle==2 && this.posX.toFixed(1) != 213.8 && this.posY.toFixed(1) != 432.2){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
		else if (playerWalkingInCircle==3 && this.posX.toFixed(1) != 390.0 && this.posY.toFixed(1) != 520.0){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
		else if (playerWalkingInCircle==4 && this.posX.toFixed(1) != 565.0 && this.posY.toFixed(1) != 439.2){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
	};
	
	//Render
	this.render = function(){
		d.drawImage(sprite, player.posX, player.posY, sprite.width, sprite.height);
	};
	
}
