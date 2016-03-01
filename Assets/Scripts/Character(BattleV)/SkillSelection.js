var Go : Move;

var SkillCounter : int;
var ComboCounter : int;
var Stop : int;
var CancelCount : int;
var TargetSelect : int;
var AllowSkillSelect : boolean = true;

var First : int;
var Second : int;
var Third : int;

var EnemyAmount1 : int;

var TotalSPLoss : int;
var CurSP : int;
var SPLoss : int;

var SendTargetSelection : TargetSelection;
var SendSkillGui : GuiSkillInput;
var SendChar : CharacterStats;

function Start(){

	SkillCounter = 3;
	CancelCount = 1;
	ComboCounter = 3;
	Stop = 2;
}

function Update() {

	SendSkillGui.CheckOrder(First, Second, Third);
	
	if(EnemyAmount1 == 0)
	{
		SendChar.MaxOutSP();
		AllowSkillSelect = false;
		
		SkillCounter = 3;
		SendTargetSelection.Okay();
		First = 0;
		Second = 0;
		Third = 0;
		CancelCount = 1;
		ResetComboCounter();
	}

	if(ComboCounter == 0)
	{
		SkillCounter = 3;
		SendTargetSelection.Okay();
		First = 0;
		Second = 0;
		Third = 0;
		CancelCount = 1;
		ResetComboCounter();
		AllowSkillSelect = true;
		ResetLoss();
	}
	
	if(Stop <= 0)
	{
		ResetStop();
	}
	
	if(ComboCounter == 2 && Stop == 2 && EnemyAmount1 > 0)
	{
		Skill2();
		StopMinus();
	}
	
	if(ComboCounter == 1 && Stop == 1 && EnemyAmount1 > 0)
	{
		Skill3();
		StopMinus();
	}
	


if(AllowSkillSelect == true)
{
	
	
	if(Input.GetButtonDown("1") && SkillCounter > 0)
	{
		SPLoss = 20;
		TotalLoss();
		
		if(CurSP >= TotalSPLoss)
		{
		
			if(SkillCounter == 3)
			{
				First = 1;
			}
			if(SkillCounter == 2)
			{
				Second = 1;
			}
			if(SkillCounter == 1)
			{
				Third = 1;
			}
			
			SkillCounterMinus();
		}
		else
		{
			ReduceLoss();
		}			
	}

	if(Input.GetButtonDown("2") && SkillCounter > 0)
	{
	
		SPLoss = 10;
		TotalLoss();
		
		if(CurSP >= TotalSPLoss)
		{

			if(SkillCounter == 3)
			{
				First = 2;		
			}
			if(SkillCounter == 2)
			{
				Second = 2;
			}
			if(SkillCounter == 1)
			{
				Third = 2;
			}
			
			SkillCounterMinus();		
		}
		else
		{
			ReduceLoss();
		}

	}
	
	if(Input.GetButtonDown("3") && SkillCounter > 0)
	{
	
		SPLoss = 20;
		TotalLoss();
		
		if(CurSP >= TotalSPLoss)
		{
	
			if(SkillCounter == 3)
			{
				First = 3;	
			}
			if(SkillCounter == 2)
			{
				Second = 3;
			}
			if(SkillCounter == 1)
			{
				Third = 3;
			}
			
			SkillCounterMinus();
		
		}
		else
		{
			ReduceLoss();
		}
	}
}



	if(Input.GetButtonDown("J") && TargetSelect > 0 && SkillCounter < 3 && EnemyAmount1 > 0)
	{
		gameObject.animation.Play("Attack");
		SendTargetSelection.NotOkay();
		CancelCount = 0;
		AllowSkillSelect = false;
		Skill1();

		TurnGoZero();
		/*Need TurnGoMinus in order to stop the player from hitting the J button multiple times during the turn,
		The Turn variable is not set to zero until the end of turn in order to keep the regen from going until the end of the turn,
		thus we need the TurnGoMinus variable in place of it*/
	}
	
	if(Input.GetButtonDown("K") && SkillCounter < 3 && CancelCount == 1)
	{
		if(SkillCounter == 2)
		{
			RemoveSkill();
			
			if(First == 1)
			{
				SPLoss = 20;
			}
			if(First == 2)
			{
				SPLoss = 10;
			}
			if(First == 3)
			{
				SPLoss = 20;
			}
			
			ReduceLoss();
			First = 0;
		}
		
		else if(SkillCounter == 1)
		{
			RemoveSkill();
			
			if(Second == 1)
			{
				SPLoss = 20;
			}
			if(Second == 2)
			{
				SPLoss = 10;
			}
			if(Second == 3)
			{
				SPLoss = 20;
			}
			
			ReduceLoss();
			Second = 0;
		}
		
		else if(SkillCounter == 0)
		{
			RemoveSkill();
			
			if(Third == 1)
			{
				SPLoss = 20;
			}
			if(Third == 2)
			{
				SPLoss = 10;
			}
			if(Third == 3)
			{
				SPLoss = 20;
			}
			
			ReduceLoss();
			Third = 0;
		}

		

		
	}
	

}

//Everything below this bar is just testing stuff
//Hey when you get back remember that you were trying to figure out the skill order in a combo
// So continue by adding the functions Skill2 and Skill3


function Skill1(){

	if(EnemyAmount1 > 0)
	{
	
		if(First == 1){
		
			Go.Stab();
		}
	
		else if(First == 2){
	
			Go.Slash();
		}
	
		else if(First == 3){
		
			Go.Heal();
		}
		else ComboCounter -= 1;
	}
}

function Skill2(){

	if(EnemyAmount1 > 0)
	{
		if(Second == 1){
		
			Go.Stab();
		}
	
		else if(Second == 2){
		
			Go.Slash();
		}
	
		else if(Second == 3){
		
			Go.Heal();
		}
		else ComboCounter -= 1;
	}
}

function Skill3(){

	if(EnemyAmount1 > 0)
	{
		if(Third == 1){
		
			Go.Stab();
		}
	
		else if(Third == 2){
	
			Go.Slash();
		}
	
		else if(Third == 3){
		
			Go.Heal();
		}
		else ComboCounter -= 1;
	}
}

function ComboCounterMinus(){

	ComboCounter -= 1;
}

function ResetComboCounter(){

	ComboCounter = 3;
}

function StopMinus(){

	Stop -= 1;
}

function ResetStop(){
	
	Stop = 2;
}

function SkillCounterMinus(){
	
	SkillCounter -= 1;

}

function TurnGoZero(){
	
	TurnGo = 0;
}

function RemoveSkill(){

	SkillCounter += 1;
}

function CheckTargetNum(TargetNum : int){

	TargetSelect = TargetNum;
}

function GetEnemyAmount(EnemyAmount : int){

	EnemyAmount1 = EnemyAmount;
	
	

}

function CheckSP(SP : int){

	CurSP = SP;

}

function TotalLoss(){

	TotalSPLoss += SPLoss;
}

function ReduceLoss(){

	TotalSPLoss -= SPLoss;
}

function ResetLoss(){

	TotalSPLoss = 0;
}

function SkillSelectOkay(){

	AllowSkillSelect = true;
}
