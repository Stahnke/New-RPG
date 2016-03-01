var SPLoss : int;
var Damage : int;
var HealthGain : int;
var CurSP : int;
var AddDamage : int;
var BDamage : int;

var Target : int;
var num : int;
var WaitCount : int = 1;

var Fireball : AudioClip;


var Character : CharacterStats;
var SendDamageSender : DamageSender;
var SendComboCounter : SkillSelection;
var SendComboOverdrive : ComboOverdrive;


/*In this program we will access a certain move in order to set the damage and animation,
then do the Complete() function in order to actually send the damage/effects to the enemy*/

function Update(){

	if(WaitCount == 1)
	{
		SendComboOverdrive.CheckTimer();
	}

}

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
		num = 4;
		BDamage = 5;
		SendComboOverdrive.CheckTimerNum(2);
		SendComboOverdrive.GetBonusDamage(BDamage);
		SendComboOverdrive.Overdrive(num);
		
		//Do Animation Here
		//Add effects here (posion, stun)
	}
	else
	{
		SPLoss = 0;
		SendComboCounter.ComboCounterMinus();


	}

}

function Slash(){

	SPLoss = 10;
	
	if(CurSP >= SPLoss)
	{
		Damage = 10;
		Damage += AddDamage;
		num = 4;
		BDamage = 5;
		SendComboOverdrive.CheckTimerNum(1);
		SendComboOverdrive.GetBonusDamage(BDamage);
		SendComboOverdrive.Overdrive(num);
	}
	else
	{
		SPLoss = 0;
		SendComboCounter.ComboCounterMinus();
	}

}

function Heal(){

	SPLoss = 20;
	
	if(CurSP >=SPLoss)
	{
		HealthGain = 50;
		//Same as before
		yield WaitForSeconds(3);
		Complete();
	}
	else
	{
		SPLoss = 0;
		SendComboCounter.ComboCounterMinus();
	}
}

function CheckWaitCount(x : int){

	WaitCount = x;

}

function GetOverDriveDamage(OverDriveDamage : int){

	Damage += OverDriveDamage;
}

function Complete(){  //This is separate to save space, possibly make a spearate one for character and enemy (Heal vs Damage)?

	Character.SPLoss(SPLoss);
	Character.HealthGain(HealthGain);
	SendDamageSender.HoldDamage(Damage);
	audio.PlayOneShot(Fireball);
	
	SPLoss = 0;
	Damage = 0;

}

function ComboCounterMinus(){
		
	SendComboCounter.ComboCounterMinus();
}

