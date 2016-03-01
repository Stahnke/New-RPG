var x : int;

function Start () {

	gameObject.Find("Character").SendMessageUpwards("StartStartCheck", x, SendMessageOptions.DontRequireReceiver);
}

