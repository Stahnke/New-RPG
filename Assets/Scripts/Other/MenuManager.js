var MenuItems:menuItems[];

var currentMenuItem : int = 0;

var keyDelay : float = 0.25;

var OkayToSelect : boolean = false;

var StartFirstButton : boolean = true;

function Start(){
	
	var lastMenuItem : int = currentMenuItem;
	
	while(true)
	{
		if(Input.GetAxisRaw("Vertical") > 0.9)
		{
			lastMenuItem = currentMenuItem;
			
			currentMenuItem--;
			if(currentMenuItem < 0) currentMenuItem = 0;
			
			if(lastMenuItem != currentMenuItem)
				{
					MenuItems[lastMenuItem].OnSelected(false);
					
					MenuItems[currentMenuItem].OnSelected(true);
				}
			
			yield new WaitForSeconds(keyDelay);
		}
		else if(Input.GetAxisRaw("Vertical") < -0.9)
		{
			lastMenuItem = currentMenuItem;
			
			currentMenuItem++;
			if(currentMenuItem >= MenuItems.length) currentMenuItem = MenuItems.length - 1;
			
			if(lastMenuItem != currentMenuItem)
				{
					MenuItems[lastMenuItem].OnSelected(false);
					
					MenuItems[currentMenuItem].OnSelected(true);
				}
			
			yield new WaitForSeconds(keyDelay);
		}
		yield;
		
		if(OkayToSelect == true)
		{
			if(StartFirstButton == true)
			{
				MenuItems[currentMenuItem].OnSelected(true);
				StopFirstButton();
			}
			
			if(Input.GetButtonDown("J"))
			{
				if(currentMenuItem == 0)
				{
					GameObject.Find("Camera7").animation.Play("NewGame");
					GameObject.Find("TitleName").animation.Play("MoveTitleName");
					GameObject.Find("Buttons").animation.Play("MoveButtons");
					
					yield WaitForSeconds(4);
				
					Application.LoadLevel("LoadUp");
				}
			}
		}
	}
}

function StopFirstButton(){

	StartFirstButton = false;
}