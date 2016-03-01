var GuiSP : GameObject;
var SP1 : int;
var MaxSP1 : int;

function Update(){
	
	GuiSP.guiText.text = "SP: " + SP1 + " / " + MaxSP1;

}

function CheckSP(SP : int){

	SP1 = SP;
}

function CheckMaxSP(MaxSP : int){

	MaxSP1 = MaxSP;
}