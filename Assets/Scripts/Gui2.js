




static var guiDepth2 : int = 0;
var guiScript1: Gui;
var myStyle	: GUIStyle;
var noSnapBtn : Texture;


function OnGui(){

 GUI.depth = guiDepth2;

    if (GUI.Button(Rect(20,120,120,120),noSnapBtn)){
	    guiScript1.snapOn = false;
        guiDepth2 = 1;
        guiScript1.guiDepth1 = 0;
        print("hit gui depth on GUI2");
		}
		
}

