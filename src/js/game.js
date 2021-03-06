//This script is contains the update and render method of the game

var keyboard = new Keyboard();

function update(){

	//keyboard update
	keyboard.updateKeyInput();
	
	//player update
	player.update();
	
	//enemies update
	for(i=0;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
		while(enemy[i].x<(enemy[i].minX) || enemy[i].x> (enemy[i].maxX) ){
			enemy[i].x = randomize(82)*10;
		}
	}
	
	for(i=0;i<amount;i++){
		enemy[i].update();
	}
	
	//verifyiing enemies collision
	for(var j=0;j<NUMBER_OF_TROLLS_TO_SPAWN;j++){
		for(i=0;i<4;i++){
			enemy[j].verifyGateCollision(enemy[j],gate[i]);
			if(enemy[j].collidingWithGate){
				//alert(enemy[j].collidingWithGate);
				if(gate[i].health >= 0){
					gate[i].health-=0.01;
				}
				else {
					player.health -= 0.01;
				}
				if(gate[i].health <= 0 && gate[i].health >= -20){
					//alert("destroy");
					gate[i].destroyGate();
				}
			}
			if(gate[i].doCooldown){
				//alert("gate " + i + " cooldown = " + gate[i].cooldown);
				
				gate[i].cooldown -= RATE_COOLDOWN;
				if(gate[i].cooldown <= 0){
					gate[i].fixGate();
				}
			}
			
		}
		enemy[j].verifyCityCollision(enemy[i],city);
	}
}

function render(){

	d.drawImage(background_grass, 0, 0);
	d.drawImage(city.sprite, 149, 48);
	
	d.drawImage(gate[0].icon, MINIATURE_PURPLE_GATE_X_POSITION, MINIATURE_PURPLE_GATE_Y_POSITION);
	d.drawImage(gate[1].icon, MINIATURE_GOLD_GATE_X_POSITION, MINIATURE_GOLD_GATE_Y_POSITION);
	d.drawImage(gate[2].icon, MINIATURE_BLUE_GATE_X_POSITION, MINIATURE_BLUE_GATE_Y_POSITION);
	d.drawImage(gate[3].icon, MINIATURE_RED_GATE_X_POSITION, MINIATURE_RED_GATE_Y_POSITION);
	
	d.font = "9pt Arial";
	
	if(gate[0].broken)		
		d.fillText("Rebuilding...",MINIATURE_PURPLE_GATE_X_POSITION + 38 , MINIATURE_PURPLE_GATE_Y_POSITION + 35);
	if(gate[1].broken)		
		d.fillText("Rebuilding...",MINIATURE_GOLD_GATE_X_POSITION + 38 , MINIATURE_GOLD_GATE_Y_POSITION + 35);
	if(gate[2].broken)		
		d.fillText("Rebuilding...",MINIATURE_BLUE_GATE_X_POSITION + 38 , MINIATURE_BLUE_GATE_Y_POSITION + 35);
	if(gate[3].broken)		
		d.fillText("Rebuilding...",MINIATURE_RED_GATE_X_POSITION + 38 , MINIATURE_RED_GATE_Y_POSITION + 35);
	
	drawBar(MINIATURE_PURPLE_GATE_X_POSITION + 38, MINIATURE_PURPLE_GATE_Y_POSITION + 5, 80, 20, gate[PURPLE_GATE-1].health, true, "#762A9C");
	drawBar(MINIATURE_GOLD_GATE_X_POSITION + 38, MINIATURE_GOLD_GATE_Y_POSITION + 5, 80, 20, gate[GOLD_GATE-1].health, true, "#878A00");
	drawBar(MINIATURE_BLUE_GATE_X_POSITION + 38, MINIATURE_BLUE_GATE_Y_POSITION + 5, 80, 20, gate[BLUE_GATE-1].health, true, "#0657FF");
	drawBar(MINIATURE_RED_GATE_X_POSITION + 38, MINIATURE_RED_GATE_Y_POSITION + 5, 80, 20, gate[RED_GATE-1].health, true, "#C70035");
	
	//render player
	player.render();
	
	//render enemy
	for(i=0;i<amount;i++){
		enemy[i].render();
	}
	for(i=amount;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
		enemy[i].timeCounter=0;
	}
	
	//render gates
	for(i=0;i<4;i++){
		gate[i].render();
	}
	
	for(i=0;i<amount;i++){
		if(enemy[i].rend){	
			drawBar(enemy[i].x, enemy[i].y-4, 15, 3, enemy[i].timeCounter>14 ?  0 : 15 - enemy[i].timeCounter, true, "pink");
		}
		if(enemy[i].timeCounter==15){
			var index = enemy.indexOf(i);
			enemy[i].x = -500;
			enemy[i].y = -500;
			if(index > -1){
				enemy.splice(index,1);
			}
		}
	}
	
	for(i=0;i<amount;i++){
		if(circleCollision2(enemy[i],player)){
			enemy[i].bePacified(player);
		}
	}
	
	textGateHealth();	
	time();
}


window.onkeydown = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;

};

window.onkeyup = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;

};

