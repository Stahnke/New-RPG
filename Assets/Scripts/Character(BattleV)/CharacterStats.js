var Health : int;
var MaxHealth : int;
var CharDamage : int;
var SP : int;
var MaxSP : int;
var SPRegen : int;
var RegenCount : int;
var HealthText : GameObject;

var Send : Move;
var SendSPRegen : SPRegen;
var SendGui : GuiSP;
var SendSelect : SkillSelection;

function Start(){
	
	MaxHealth = 200;
	MaxSP = 90;
	SPRegen = 3;
	CharDamage = 5;
	RegenCount = 1;
	
	Health = MaxHealth;
	SP = MaxSP;

}

function RegenCounting(RegenCounter : int){

	RegenCount = RegenCounter;
}

function Update(){

	SendSelect.CheckSP(SP);

	SendGui.CheckSP(SP);
	
	SendGui.CheckMaxSP(MaxSP);

	Send.Check(SP , CharDamage);
	
	HealthText.guiText.text = "HP: " + Health + " / " + MaxHealth;
	
	if(RegenCount > 0)
	{
		SendSPRegen.CheckSPGain(SPRegen);
	}
	
	if(Health < 0)
	{
		ZeroHealth();
	}
	
	if(SP < 0)
	{
		ZeroSP();
	}
	
	if(Health > MaxHealth)
	{
		MaxOutHealth();
	}
	
	if(SP > MaxSP)
	{
		MaxOutSP();
	}
	
	
}

function ZeroHealth(){
	
	Health = 0;
}

function ZeroSP(){
	
	SP = 0;
}

function MaxOutHealth(){

	Health = MaxHealth;
}

function MaxOutSP(){
	
	SP = MaxSP;
}

function MaxHealthGain(MaxHealthGain : int){

	MaxHealth += MaxHealthGain;
}

function MaxSPGain(MaxSPGain : int){

	MaxSP += MaxSPGain;
}

function CharDamageGain(CharDamageGain : int){

	CharDamage += CharDamageGain;
}

function HealthGain(HealthGain : int){

	Health += HealthGain;
}

function SPGain(SPGain : int){

	if(SP < MaxSP)
	{
		SP += SPGain;
	}
}

function HealthLoss(Damage : int){

	Health -= Damage;
}

function SPLoss(SPLoss : int){

	SP -= SPLoss;
}