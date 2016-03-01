var Health : int;
var MaxHealth : int = 100;
var x : int = 1;
var n : int;
var EXP : int = 100;

var DamageText : GameObject;


var Position : Transform;

function Start () {

	Health = MaxHealth;
	
}

function Update(){

	if(gameObject.name == "Enemy1")
	{
		gameObject.Find("Character").SendMessageUpwards("CheckPosition1", Position, SendMessageOptions.DontRequireReceiver);
		
		gameObject.Find("HealthText1").SendMessageUpwards("CheckHealth", Health, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("HealthText1").SendMessageUpwards("CheckMaxHealth", MaxHealth, SendMessageOptions.DontRequireReceiver);
		
	}
	
		if(gameObject.name == "Enemy2")
	{
		gameObject.Find("Character").SendMessageUpwards("CheckPosition2", Position, SendMessageOptions.DontRequireReceiver);
		
		gameObject.Find("HealthText2").SendMessageUpwards("CheckHealth", Health, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("HealthText2").SendMessageUpwards("CheckMaxHealth", MaxHealth, SendMessageOptions.DontRequireReceiver);
	}
	
		if(gameObject.name == "Enemy3")
	{
		gameObject.Find("Character").SendMessageUpwards("CheckPosition3", Position, SendMessageOptions.DontRequireReceiver);
		
		gameObject.Find("HealthText3").SendMessageUpwards("CheckHealth", Health, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("HealthText3").SendMessageUpwards("CheckMaxHealth", MaxHealth, SendMessageOptions.DontRequireReceiver);
	}

	if(Health <= 0)
	{
		gameObject.Find("Character").SendMessageUpwards("ResetTargetNum", SendMessageOptions.DontRequireReceiver);
		if(n == 3)
		{
			if(gameObject.name == "Enemy1")
			{
				gameObject.Find("Enemy2").SendMessageUpwards("Rename1", x, SendMessageOptions.DontRequireReceiver);
				gameObject.Find("Enemy3").SendMessageUpwards("Rename2", x, SendMessageOptions.DontRequireReceiver);
				
				gameObject.Find("HealthText2").SendMessageUpwards("Rename1", x, SendMessageOptions.DontRequireReceiver);
				gameObject.Find("HealthText3").SendMessageUpwards("Rename2", x, SendMessageOptions.DontRequireReceiver);
				
				
			}
			else if(gameObject.name == "Enemy2")
			{
				gameObject.Find("Enemy3").SendMessageUpwards("Rename2", x, SendMessageOptions.DontRequireReceiver);
				
				gameObject.Find("HealthText3").SendMessageUpwards("Rename2", x, SendMessageOptions.DontRequireReceiver); 
			}
		}
		else if(n == 2)
		{
			if(gameObject.name == "Enemy1")
			{
				gameObject.Find("Enemy2").SendMessageUpwards("Rename1", x, SendMessageOptions.DontRequireReceiver);
				
				gameObject.Find("HealthText2").SendMessageUpwards("Rename1", x, SendMessageOptions.DontRequireReceiver);				
			}
	
		}
		
		n -=1;
		
		gameObject.Find("Character").SendMessageUpwards("EnemyDeath", x, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("Character").SendMessageUpwards("EXPGain", EXP, SendMessageOptions.DontRequireReceiver);
		
		
		Destroy(gameObject);
	}
	
	if(Health < 0)
	{
		
		Zero();
	}
	
}

function TakeDamage(SendDamage : int){

	Health -= SendDamage;
	var HealthMinus1 : GameObject = Spawner.Spawn(DamageText, Position.position, Position.rotation) as GameObject;
	HealthMinus1.GetComponent(TextMesh).text = "-" + SendDamage;
	

}

function Zero(){

	Health = 0;
}

function CheckEnemyAmount(EnemyAmount : int){

	n = EnemyAmount;

}

function Rename1(x : int){

	gameObject.name = "Enemy1";
}

function Rename2(x : int){

	gameObject.name = "Enemy2";
}