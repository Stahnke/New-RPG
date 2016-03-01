var Health : int;
var MaxHealth : int;
var CharDamage : int;
var SP : int;
var MaxSP : int;

var Send : EnemyMove;

function Start(){
	
	MaxHealth = 200;
	MaxSP = 90;
	CharDamage = 5;
	
	Health = MaxHealth;
	SP = MaxSP;

}

function Update(){

	Send.Check(SP , CharDamage);
	
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

	SP += SPGain;
}

function HealthLoss(Damage : int){

	Health -= Damage;
}

function SPLoss(SPLoss : int){

	SP -= SPLoss;
}