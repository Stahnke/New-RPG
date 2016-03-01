function OnSelected(on : boolean){

	if(on)
	{
		iTween.MoveTo(gameObject,{"z": -378, "time":0.5});
		iTween.MoveTo(gameObject,{"x": -28, "time":0.5});
	}
	
	else
	{
		iTween.MoveTo(gameObject,{"z": -369, "time":0.5});
		iTween.MoveTo(gameObject,{"x": -38, "time":0.5});
	}
}