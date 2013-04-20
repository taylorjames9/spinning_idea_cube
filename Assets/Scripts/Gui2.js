


var guiScript1: Gui;
var myStyle	: GUIStyle;
var noSnapBtn : Texture;
var showbtn2 :boolean = false;

class Gui2 extends MonoBehaviour {
	static var guiDepth : int = 1;
 	function OnGUI(){
 		GUI.depth = guiDepth;
 		
 		if(showbtn2){
		if (GUI.Button(Rect(20,15,80,80),noSnapBtn)){
	    guiScript1.snapOn = false;
        guiDepth = 1;
        Gui.guiDepth = 0;
        print("hit gui depth on GUI2");
        guiScript1.showbtn1 = true;
        showbtn2 = false;
		}
		}
}
}
