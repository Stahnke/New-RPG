var Go : EnemyMove;
var EnemyTurn : int;

function Update() {

	if(EnemyTurn > 0)
	{
		var Rand = Random.Range(1,4);
		
		if(Rand == 1)
		{
			Go.Stab();
		}
		else Go.Slash();
		
	}
}

function CheckTurn(ThisEnemyTurn){

	EnemyTurn = ThisEnemyTurn;

}

