


var snapBtn : Texture;
var rotateBtn: Texture;

var snapOn: boolean = false;
var tellCubeRotate: boolean = false;
var buttonUp: boolean = true;

//var myGUI = new GUIStyle;
var mainCube: Transform;

var cubeRotateCounter: int = 0;
//cubeRotate: boolean = false;


//var thisGuiScript: Gui;
static var guiDepth1 : int = 0;
var myStyle	: GUIStyle;
var guiScript2: Gui2;

function Start () {
	tellCubeRotate = false;
}

function OnGUI (){

 GUI.depth = guiDepth1;

        if (GUI.Button(Rect(20,15,80,80),snapBtn)){
            snapOn = true;
            guiDepth1 = 1;
            guiScript2.guiDepth2 = 0;
            print("hit gui depth on GUI");
        }
           		
		if(snapOn){
				//print("Rotate Bttn Should now be visible");
				if(GUI.Button(Rect(Screen.width-120, Screen.height-120,90,90),rotateBtn)){
						cubeRotateCounter++;
						if(cubeRotateCounter%2==1){ 
            				tellCubeRotate=true;
            				cubeRotateCounter++;
           }   
       }
    }
}



