





var guiScript1: Gui;
var myStyle	: GUIStyle;
var noSnapBtn : Texture;

class Gui2 extends MonoBehaviour {
	static var guiDepth : int = 1;
 	function OnGui(){
 		GUI.depth = guiDepth;
		if (GUI.Button(Rect(20,15,120,120),noSnapBtn)){
	    guiScript1.snapOn = false;
        guiDepth = 1;
        Gui.guiDepth = 0;
        print("hit gui depth on GUI2");
		}
		
}
}


// Makes this button go back in depth over the example2 class one.

//script entitled: GuiRecede2

/*var whistle	: Texture;
var myStyle	: GUIStyle;

class GuiRecede2 extends MonoBehaviour {
    static var guiDepth : int = 1;
    function OnGUI() {
        GUI.depth = guiDepth;
        if (GUI.Button(Rect(10,Screen.height-90,150,90), whistle, myStyle)) {
            guiDepth = 1;
            GuiRecede1.guiDepth = 0;
        }
    }
}*/