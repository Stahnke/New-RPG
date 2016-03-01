var speed : int = 2;

function Start () {

	gameObject.transform.rotation.y = 0;
}

function Update () {

	if(Input.GetButton("Up"))
	{
		transform.rotation.y = 0;
		transform.position += transform.forward *= speed;
	}
	
	else if(Input.GetButton("Left"))
	{
		transform.rotation.y = 45;
		transform.position += transform.forward *= speed;
	}
	
	else if(Input.GetButton("Down"))
	{
		transform.rotation.y = 180;
		transform.position += transform.forward *= speed;
	}

	
	else if(Input.GetButton("Right"))
	{
		transform.rotation.y = 270;
		transform.position += transform.forward *= speed;
	}
} 