var Health : int;
var MaxHealth : int;
var Target : Transform;


function Update(){

	gameObject.GetComponent(TextMesh).text = Health + " / " + MaxHealth;
	gameObject.transform.position.y = 20;
	
	if(Health <= 0)
	{
		Destroy(gameObject);
	}
}

function CheckHealth(PreHealth : int){

	Health = PreHealth;
}

function CheckMaxHealth(PreMaxHealth : int){

	MaxHealth = PreMaxHealth;

}

function Rename1(x : int){

	gameObject.name = "HealthText1";
}

function Rename2(x : int){

	gameObject.name = "HealthText2";
}