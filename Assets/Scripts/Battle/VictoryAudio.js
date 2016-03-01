var SendBattleVictory : BattleVictory;

function PlayAudio(){

	audio.Play();
	SendBattleVictory.EndBattle();
}

function StopAudio(){

	audio.Stop();
}