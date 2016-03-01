

function Start(){

	Encounter();
}

function Encounter(){

	yield WaitForSeconds(3);
	Application.LoadLevel("Battle");
}