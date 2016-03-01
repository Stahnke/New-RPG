var StartCheck : boolean = false;  /*Eventually we will attach this script to the Free Roam version of the character
									because technically we will also spawn the Battle version of the character, so this script
									cannot be attached to it, since it initializes spawns.*/


var Send : CameraAnimation;
var SendSpawn : Spawn;
var SendControls : BattleVictory;
var SendTarget : TargetSelection;
var SendChar : SkillSelection;


var BattleCam : GameObject;
var SPGui : GameObject;
var HPGui : GameObject;
var SkillsGui : GameObject;
var Skill1 : GameObject;
var Skill2 : GameObject;
var Skill3 : GameObject;
var BattleLight : GameObject;

function Update () {

	if(StartCheck == true)
	{
		
		BattleLight.light.enabled = true;
		SPGui.guiText.enabled = true;
		HPGui.guiText.enabled = true;
		SkillsGui.guiText.enabled = true;
		BattleCam.camera.enabled = true;
		Skill1.guiTexture.enabled = true;
		Skill2.guiTexture.enabled = true;
		Skill3.guiTexture.enabled = true;
		
		SendTarget.StartSpawnOkay();
		SendChar.SkillSelectOkay();
		
		BattleCam.camera.enabled = true;
		Send.CameraFloat();
		
		StartBattle();
		
		ResetStartCheck();
	}
}

function ResetStartCheck(){

	StartCheck = false;
}

function StartStartCheck(){

	StartCheck = true;
}

//This Function will do many things such as load the battle map, spawn allies and spawn enemies
//For now we only will spawn enemies because the exploration world has not been created.
function StartBattle(){

	SendSpawn.StartSpawn();


}