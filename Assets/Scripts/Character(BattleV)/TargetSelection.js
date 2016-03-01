var TargetNum : int;
var EnemyAmount : int;
var OkayToTab : int;
var SpawnOkay : boolean = true;

var TargetCursor : GameObject;

var SpawnPoint1 : Transform;
var SpawnPoint2 : Transform;
var SpawnPoint3 : Transform;

var CursorPosition1 : Transform;
var CursorPosition2 : Transform;
var CursorPosition3 : Transform;


var SendDamageSender : DamageSender;
var SendSkillSelect : SkillSelection;
var SendBattleVictory : BattleVictory;

function Start(){

	TargetNum = 0;

}

function Update () {

	SendDamageSender.CheckEnemyAmount(EnemyAmount);
	
	if(EnemyAmount == 0)
	{
		TargetNum = 0;
	}

	if(EnemyAmount == 1)
	{
		gameObject.Find("Enemy1").SendMessageUpwards("CheckEnemyAmount", EnemyAmount, SendMessageOptions.DontRequireReceiver);
	}
	
	else if(EnemyAmount == 2)
	{
		gameObject.Find("Enemy1").SendMessageUpwards("CheckEnemyAmount", EnemyAmount, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("Enemy2").SendMessageUpwards("CheckEnemyAmount", EnemyAmount, SendMessageOptions.DontRequireReceiver);
	}
	
	else if(EnemyAmount == 3)
	{
		gameObject.Find("Enemy1").SendMessageUpwards("CheckEnemyAmount", EnemyAmount, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("Enemy2").SendMessageUpwards("CheckEnemyAmount", EnemyAmount, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("Enemy3").SendMessageUpwards("CheckEnemyAmount", EnemyAmount, SendMessageOptions.DontRequireReceiver);
	}

	SendSkillSelect.GetEnemyAmount(EnemyAmount);
	SendBattleVictory.CheckEnemyAmount(EnemyAmount);
	

	if(TargetNum == 1)
	{
		gameObject.Find("Cursor").SendMessageUpwards("CheckTarget", CursorPosition1, SendMessageOptions.DontRequireReceiver);
	}
	
	if(TargetNum == 2)
	{
		gameObject.Find("Cursor").SendMessageUpwards("CheckTarget", CursorPosition2, SendMessageOptions.DontRequireReceiver);
	}
	
	if(TargetNum == 3)
	{
		gameObject.Find("Cursor").SendMessageUpwards("CheckTarget", CursorPosition3, SendMessageOptions.DontRequireReceiver);
	}

	if(OkayToTab == 0)
	{
		if(Input.GetButtonDown("tab"))
		{
			if(SpawnOkay == true)
			{
				var Tag1 : GameObject = Spawner.Spawn (TargetCursor, SpawnPoint1.position, SpawnPoint1.rotation) as GameObject;
				ResetSpawnOkay();
			}
			
			if(TargetNum == EnemyAmount)
			{
				ResetTargetNum();
			}
			else TargetNum += 1;
		}
	}
	
	SendDamageSender.CheckTargetNum(TargetNum);
	SendSkillSelect.CheckTargetNum(TargetNum);
	
	

}

function CheckEnemyAmount(n : int){

	EnemyAmount = n;

}

function ResetTargetNum(){

	TargetNum = 1;
}

function NotOkay(){

	OkayToTab = 1;
}

function Okay(){

	OkayToTab = 0;
}

function ResetSpawnOkay(){

	SpawnOkay = false;
}

function StartSpawnOkay(){

	SpawnOkay = true;
}

function EnemyDeath(x : int){

	EnemyAmount -= x;

}

function CheckPosition1(Position1 : Transform){

	CursorPosition1 = Position1;

}

function CheckPosition2(Position2 : Transform){

	CursorPosition2 = Position2;

}

function CheckPosition3(Position3 : Transform){

	CursorPosition3 = Position3;

}