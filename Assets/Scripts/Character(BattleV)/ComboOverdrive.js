var OverDriveDamage : int;
var BonusDamage : int;

var n : int;
var counter : int;
var Allow : int = 0;
var Timer : double;
var Stop : int = 0;

var Slot1 : int;
var Slot2 : int;
var Slot3 : int;
var Slot4 : int;

var Send : Move;

function Update(){

	if(Timer <= 0 && Stop == 1)
	{
		Allow = 0;
		Send.GetOverDriveDamage(OverDriveDamage);
		ResetOverDriveDamage();
		Send.Complete();
		ZeroStop();
		
	}
	
	if(Timer < 0)
	{
		Zero();
	}

	if(Allow == 1)
	{
		if(Slot1 == 1)
		{
			//GuiStuff//
			if(Input.GetButtonDown("1"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot1 == 2)
		{
			//GuiStuff//
			if(Input.GetButtonDown("2"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot1 == 3)
		{
			//GuiStuff//
			if(Input.GetButtonDown("3"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot1 == 4)
		{
			//GuiStuff//
			if(Input.GetButtonDown("4"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
	}
	
	if(Allow == 2)
	{
		if(Slot2 == 1)
		{
			//GuiStuff//
			if(Input.GetButtonDown("1"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot2 == 2)
		{
			//GuiStuff//
			if(Input.GetButtonDown("2"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot2 == 3)
		{
			//GuiStuff//
			if(Input.GetButtonDown("3"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot2 == 4)
		{
			//GuiStuff//
			if(Input.GetButtonDown("4"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
	}
	
	if(Allow == 3)
	{
		if(Slot3 == 1)
		{
			//GuiStuff//
			if(Input.GetButtonDown("1"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot3 == 2)
		{
			//GuiStuff//
			if(Input.GetButtonDown("2"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot3 == 3)
		{
			//GuiStuff//
			if(Input.GetButtonDown("3"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot3 == 4)
		{
			//GuiStuff//
			if(Input.GetButtonDown("4"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
	}
	
	if(Allow == 4)
	{
		if(Slot4 == 1)
		{
			//GuiStuff//
			if(Input.GetButtonDown("1"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot4 == 2)
		{
			//GuiStuff//
			if(Input.GetButtonDown("2"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot4 == 3)
		{
			//GuiStuff//
			if(Input.GetButtonDown("3"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
		
		if(Slot4 == 4)
		{
			//GuiStuff//
			if(Input.GetButtonDown("4"))
			{
				OverDriveDamage += BonusDamage;
				AllowNext();
			}
		}
	}

}

function Overdrive(num : int){

	n = num;
	
	
	if(n == 4)
	{
		Slot1 = Random.Range(1,5);
		Slot2 = Random.Range(1,5);
		Slot3 = Random.Range(1,5);
		Slot4 = Random.Range(1,5);
	}
	
	Allow = 1;
	Stop = 1;
}


function AllowNext(){

	Allow += 1;
}

function GetBonusDamage(BDamage : int){

	BonusDamage = BDamage;

}

function Zero(){

	Timer = 0;
}

function ResetOverDriveDamage(){

	OverDriveDamage = 0;
}

function CheckTimer(){

	WaitCount = 0;
	
	Send.CheckWaitCount(WaitCount);
	
	Timer -= 0.2;
	
	yield WaitForSeconds(0.2);
	
	WaitCount = 1;
	
	Send.CheckWaitCount(WaitCount);

}

function CheckTimerNum(x : double){

	Timer = x;
}

function ZeroStop(){

	Stop = 0;
}

function ZeroAllow(){

	Allow = 0;
}