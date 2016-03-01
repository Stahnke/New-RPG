var EnemyAmount : int;
var SPGui : GameObject;
var HPGui : GameObject;
var BattleCam : GameObject;
var SkillsGui : GameObject;
var Skill1 : GameObject;
var Skill2 : GameObject;
var Skill3 : GameObject;
var BattleLight : GameObject;

var EndCheck : boolean = false;
var SendVictory : VictoryAudio;

var FadeController : GameObject;
var SpawnPoint1 : Transform;

function Start () {

	EnemyAmount = 1;
}

function Update(){

	if(EnemyAmount == 0 && EndCheck == true)
	{
		AudioChange();	
	}
	
	if(EnemyAmount > 0)
	{
		EndCheck = true;
	}
}

function CheckEnemyAmount(n : int){

	EnemyAmount = n;
}


function EndBattle(){

	yield WaitForSeconds(2.5);
	
	BattleLight.light.enabled = false;
	SPGui.guiText.enabled = false;
	HPGui.guiText.enabled = false;
	SkillsGui.guiText.enabled = false;
	Skill1.guiTexture.enabled = false;
	Skill2.guiTexture.enabled = false;
	Skill3.guiTexture.enabled = false;
	//Change the BattleCam.camera.clearflags and .CullingMask
	BattleCam.camera.enabled = false;
	
	var go : GameObject = Spawner.Spawn (FadeController, SpawnPoint1.position, SpawnPoint1.rotation) as GameObject;
	
	yield WaitForSeconds(0.5);
		
	Application.LoadLevel("Victory");
	
}

function AudioChange(){

	audio.Stop();
	SendVictory.PlayAudio();
	EndCheck = false;
}