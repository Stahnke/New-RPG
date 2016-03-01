var SPGain : int;
var RegenCounter : int;

var SendRegen : CharacterStats;

function CheckSPGain(SPRegen : int){

	RegenCounter = 0;
	
	SendRegen.RegenCounting(RegenCounter);

	SPGain = SPRegen;
	
	yield WaitForSeconds(1);
	
	SendRegen.SPGain(SPGain);
	
	RegenCounter = 1;
	
	SendRegen.RegenCounting(RegenCounter);
	


}