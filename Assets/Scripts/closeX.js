

var myStyleX: GUIStyle; 
var textInputGUI: Write_On_PostIt;
var closePostIt: Texture;
var cubeS : dots_on_cube;
var closeIt: boolean = false;
var closed: boolean = true; 

function Start () {

}

function Update () {

}


class closeX extends MonoBehaviour {
static var guiDepth : int = 0;
function OnGUI () {
			 GUI.depth = guiDepth;
			//if(closeIt){
			if(textInputGUI.canType && cubeS.doubleclickCounter%2==1){

			if(GUI.Button(Rect(Screen.width/4+260, Screen.height/4+0,40,40), closePostIt, myStyleX)){
				textInputGUI.canType = false;
				//print("touched the close bttn");
				closed = true;
			}
		}
	}
}