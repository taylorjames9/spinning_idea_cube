





function Update(){

print("we're inside the gui other function");

}


var noSnapBtn : Texture;

//class Gui2 extends MonoBehaviour {
	//static var guiDepth : int = 1;
 	function OnGUI (){
 	print("registering GUI Other");
 		//GUI.depth = guiDepth;
		if (GUI.Button(Rect(20,105,80,80), noSnapBtn)){
	    //guiScript1.snapOn = false;
        //guiDepth = 1;
        //Gui.guiDepth = 0;
        print("hit gui depth on GUI2");
		}
		
}

 //if (GUI.Button(Rect(20,15,80,80),snapBtn)){