var EXP : int = 0;
var Level : int = 1;

var MaxHealthGain : int = 10;
var MaxSPGain : int = 2;
var CharDamageGain : int = 1;

var SendThis : CharacterStats;

function Update(){

	if(EXP >= 100 && Level == 1)
	{
		LevelUp();
	}
	if(EXP >= 250 && Level == 2)
	{
		LevelUp();
	}
	if(EXP >= 500 && Level == 3)
	{
		LevelUp();
	}
	//Keep going until level cap I guess...
	

}

function EXPGain(EXPGain : int){

	EXP += EXPGain;
}

function LevelUp(){

	Level += 1;
	
	SendThis.MaxHealthGain(MaxHealthGain);
	SendThis.MaxSPGain(MaxSPGain);
	SendThis.CharDamageGain(CharDamageGain);
	
	//Might do some mathematical calculations in order to devise a better leveling stats tree...
	//This will do for now though
	MaxHealthGain += 2;
	MaxSPGain += 1;
	CharDamageGain += 1;
}