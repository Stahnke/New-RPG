var First : int;
var Second : int;
var Third : int;

var S1Skill1 : GameObject;
var S2Skill1 : GameObject;
var S3Skill1 : GameObject;
var S1Skill2 : GameObject;
var S2Skill2 : GameObject;
var S3Skill2 : GameObject;
var S1Skill3 : GameObject;
var S2Skill3 : GameObject;
var S3Skill3 : GameObject;

function Update () {

	if(First == 0)
	{
		S1Skill1.guiTexture.enabled = false;
		S1Skill2.guiTexture.enabled = false;
		S1Skill3.guiTexture.enabled = false;
	}
	if(First == 1)
	{
		S1Skill1.guiTexture.enabled = true;
		S1Skill2.guiTexture.enabled = false;
		S1Skill3.guiTexture.enabled = false;
	}
	if(First == 2)
	{
		S1Skill1.guiTexture.enabled = false;
		S1Skill2.guiTexture.enabled = true;
		S1Skill3.guiTexture.enabled = false;
	}
	if(First == 3)
	{
		S1Skill1.guiTexture.enabled = false;
		S1Skill2.guiTexture.enabled = false;
		S1Skill3.guiTexture.enabled = true;
	}
	
	if(Second == 0)
	{
		S2Skill1.guiTexture.enabled = false;
		S2Skill2.guiTexture.enabled = false;
		S2Skill3.guiTexture.enabled = false;
	}
	if(Second == 1)
	{
		S2Skill1.guiTexture.enabled = true;
		S2Skill2.guiTexture.enabled = false;
		S2Skill3.guiTexture.enabled = false;	
	}
	if(Second == 2)
	{
		S2Skill1.guiTexture.enabled = false;
		S2Skill2.guiTexture.enabled = true;
		S2Skill3.guiTexture.enabled = false;	
	}
	if(Second == 3)
	{
		S2Skill1.guiTexture.enabled = false;
		S2Skill2.guiTexture.enabled = false;
		S2Skill3.guiTexture.enabled = true;	
	}
	
	if(Third == 0)
	{
		S3Skill1.guiTexture.enabled = false;
		S3Skill2.guiTexture.enabled = false;
		S3Skill3.guiTexture.enabled = false;	
	}
	if(Third == 1)
	{
		S3Skill1.guiTexture.enabled = true;
		S3Skill2.guiTexture.enabled = false;
		S3Skill3.guiTexture.enabled = false;	
	}
	if(Third == 2)
	{
		S3Skill1.guiTexture.enabled = false;
		S3Skill2.guiTexture.enabled = true;
		S3Skill3.guiTexture.enabled = false;
	}
	if(Third == 3)
	{
		S3Skill1.guiTexture.enabled = false;
		S3Skill2.guiTexture.enabled = false;
		S3Skill3.guiTexture.enabled = true;	
	}	
	

}

function CheckOrder(F : int, S : int, T : int){
	
	First = F;
	Second = S;
	Third = T;

}