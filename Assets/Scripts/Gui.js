


var myStyle	: GUIStyle;

var snapBtn : Texture;
var noSnapBtn : Texture;
var rotateBtn: Texture;

var snapOn: boolean = false;
var tellCubeRotate: boolean = false;
var buttonUp: boolean = true;

//var myGUI = new GUIStyle;
var mainCube: Transform;

var cubeRotateCounter: int = 0;
//cubeRotate: boolean = false;

function Start () {

	tellCubeRotate = false;

}

function OnGUI ()

{
        if (GUI.Button(Rect(20,15,80,80),snapBtn)){
            snapOn = true;
            //print("snapping is on");
        }
            
        if (GUI.Button(Rect(20,100,80,80),noSnapBtn)){
			snapOn = false;
			//print("snapping is off");
			}
			
		if(snapOn){
				//print("Rotate Bttn Should now be visible");
				if(GUI.Button(Rect(Screen.width-120, Screen.height-120,90,90),rotateBtn)){
						//cubeRotate = true;
						cubeRotateCounter++;
						if(cubeRotateCounter%2==1){ 
            				tellCubeRotate=true;
            				cubeRotateCounter++;
            }   
        }
     }
}


// Makes this button go back in depth over the example2 class one.

class GuiRecede2 extends MonoBehaviour {
    static var guiDepth : int = 1;
    function OnGUI() {
        GUI.depth = guiDepth;
        if (GUI.Button(Rect(10,Screen.height-90,150,90), whistle, myStyle)) {
            guiDepth = 1;
            GuiRecede1.guiDepth = 0;
        }
    }
}