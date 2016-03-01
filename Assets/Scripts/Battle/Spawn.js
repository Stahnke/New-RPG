var n : int;
var nchance : int;
var SpawnType1 : int;

var CreatureSpawn1 : GameObject;

var Monkey : GameObject;
var Bird : GameObject;

var HealthText : GameObject;

var SpawnPoint1 : Transform;
var SpawnPoint2 : Transform;
var SpawnPoint3 : Transform;

var Send : TargetSelection;
var SendBattleVictory : BattleVictory;

function StartSpawn(){

	audio.Play();

	nchance = Random.Range(1,7);
	
	if(nchance <= 3)
	{
		n = 1;
	}
	
	if(nchance == 4 || nchance == 5)
	{
		n = 2;
	}
	
	if(nchance == 6)
	{
		n = 3;
	}
	
 /*This is used to select which creature will be selected in the spawning sequence, I assume we will have to make
									 different spawn scripts for each area with specific creatures... or just make a function that takes in 
									 a varaible that will tell this script exactly which creatures to spawn and possibly even bypass the random
									 number generator in total. Most likely just surround each SpawnType with an if statement and depending on the
									 area (and in this case the creatures in the area) a condition will be sent to make only one SpawnType true*/
	
	




	
	if(n >= 1)
	{
		SetSpawnType1();
		var go1 : GameObject = Spawner.Spawn (CreatureSpawn1, SpawnPoint1.position, SpawnPoint1.rotation) as GameObject;
		go1.name = "Enemy1";
		var Health1 : GameObject = Spawner.Spawn(HealthText, SpawnPoint1.position, SpawnPoint1.rotation) as GameObject;
		Health1.name = "HealthText1";
		
	}
	
	if(n >= 2)
	{
		SetSpawnType1();
		var go2 : GameObject = Spawner.Spawn (CreatureSpawn1, SpawnPoint2.position, SpawnPoint2.rotation) as GameObject;
		go2.name = "Enemy2";
		var Health2 : GameObject = Spawner.Spawn(HealthText, SpawnPoint2.position, SpawnPoint2.rotation) as GameObject;
		Health2.name = "HealthText2";
	}
	
	if(n >= 3)
	{
		SetSpawnType1();
		var go3 : GameObject = Spawner.Spawn (CreatureSpawn1, SpawnPoint3.position, SpawnPoint3.rotation) as GameObject;
		go3.name = "Enemy3";
		var Health3 : GameObject = Spawner.Spawn(HealthText, SpawnPoint3.position, SpawnPoint3.rotation) as GameObject;
		Health3.name = "HealthText3";
	}
	
	Send.CheckEnemyAmount(n);
	SendBattleVictory.CheckEnemyAmount(n);

}

function SetSpawnType1(){

	SpawnType1 = Random.Range(1,3);
	
	if(SpawnType1 == 1)   /*This will assign CreatureSpawn1 (which will be spawned in the next few lines) the tag of monkey so everything spawned
						  as CreatureSpawn1 will be a monkey. Don't think that CreatureSpawn1 refers to the first creature spawned.*/
	{
		CreatureSpawn1 = Monkey;
	}
	
	if(SpawnType1 == 2)
	{
		CreatureSpawn1 = Bird;
	}
	
}