//This script is contains the update and render method of the game

canvas=document.getElementById("canvas");
d = canvas.getContext("2d");

function update(){
	updatePause();
	if(!paused){
		updateKeyInput();
		player.update();
		
	}
	else{
		//do nothing
	}
}

function render(){
	if(!paused){
		d.drawImage(background, 0, 0);
		
		//render player
		player.render();
		
		//render gates
		for(i=0;i<4;i++){
			gate[i].render();
		}
		
		xText();
			
	}
	else{
		//do nothing
	}
	
}

window.setInterval("update()",60/1000);
window.setInterval("render()",1);
