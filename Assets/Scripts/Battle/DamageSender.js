var Target : int;
var EnemyAmount : int;

var SendMove : Move;

function CheckTargetNum(TargetNum : int){

	Target = TargetNum;
}

function HoldDamage(Damage : int){
	
	SendDamage = Damage;
	
	if(Target == 1)
	{
			gameObject.Find("Enemy1").SendMessageUpwards("TakeDamage", SendDamage, SendMessageOptions.DontRequireReceiver);
	}
	
	if(Target == 2)
	{
			gameObject.Find("Enemy2").SendMessageUpwards("TakeDamage", SendDamage, SendMessageOptions.DontRequireReceiver);
	}
	
	if(Target == 3)
	{
			gameObject.Find("Enemy3").SendMessageUpwards("TakeDamage", SendDamage, SendMessageOptions.DontRequireReceiver);
	}
	
	SendMove.ComboCounterMinus();
}

function CheckEnemyAmount(x : int){

	EnemyAmount = x;

}

