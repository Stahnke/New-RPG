function Start () {
	
	gameObject.transform.position.y = 25;
	gameObject.transform.position.x -= 15;
	DestroyThis();
}

function DestroyThis(){

	yield WaitForSeconds(1);
	
	Destroy(gameObject);

}
