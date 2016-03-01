var Target : Transform;

function Start(){

	gameObject.name = "Cursor";

}
function Update () {

	gameObject.transform.position.y = 30;
	gameObject.transform.position.x = Target.position.x;
	gameObject.transform.position.z = Target.position.z;
	
}

function CheckTarget(Cursor : Transform){

	Target.position = Cursor.position;

}