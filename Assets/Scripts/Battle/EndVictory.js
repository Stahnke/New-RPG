var SendAudio : VictoryAudio;

function Update() {

	if(Input.GetButtonDown("J"))
	{
		gameObject.Find("BattleFieldControls").SendMessageUpwards("StopAudio", SendMessageOptions.DontRequireReceiver);
		Application.LoadLevel("FreeRoam");
	}
}
