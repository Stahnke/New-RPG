var SPLoss : int;
var Damage : int;
var HealthGain : int;
var CurSP : int;
var AddDamage : int;
var ThisEnemyTurn : int;
var ThisTurn : int;

var Character : EnemyStats;
var SendTurn : EnemySkillSelection;
var SendCharTurn : SkillSelection;

/*In this program we will access a certain move in order to set the damage and animation,
then do the Complete() function in order to actually send the damage/effects to the enemy*/


function Check(SP : int , CharDamage : int){

	CurSP = SP;
	AddDamage = CharDamage;

}


function Stab(){

	SPLoss = 20;
	
	if(CurSP >= SPLoss)
	{
		Damage = 20;
		Damage += AddDamage;
		//Do Animation Here
		//Add effects here (posion, stun)
		Complete();
	}
	else SPLoss = 0;

}

function Slash(){

	SPLoss = 10;
	
	if(CurSP >= SPLoss)
	{
		Damage = 15;
		Damage += AddDamage;
		//animation, etc
		Complete();
	}
	else SPLoss = 0;

}

function Heal(){

	SPLoss = 20;
	
	if(CurSP >=SPLoss)
	{
		HealthGain = 50;
		//Same as before
		Complete();
	}
	else SPLoss = 0;

}

function Complete(){  //This is separate to save space, possibly make a spearate one for character and enemy (Heal vs Damage)?

	Character.SPLoss(SPLoss);
	Character.HealthGain(HealthGain);
	
	SPLoss = 0;
	Damage = 0;
	
	ThisEnemyTurn = 0;
	SendTurn.CheckTurn(ThisEnemyTurn);
	if(ThisEnemyTurn == 0)
	{
		ThisTurn = 1;
		SendCharTurn.CheckTurn(ThisTurn);
	}
	//Send damage/effects here
	//Going to have to find out a way to send it to the enemy selected by the character... going to research
	//This is going to suck.... shit


}
