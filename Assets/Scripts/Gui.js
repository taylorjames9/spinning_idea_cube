


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
var myStyle	: GUIStyle;
var guiScript2: Gui2;
var showbtn1 :boolean = true;
var drip1 : AudioSource;

function Start () {
	tellCubeRotate = false;
}

class Gui extends MonoBehaviour {
	static var guiDepth : int = 0;
	function OnGUI (){

 	GUI.depth = guiDepth;
		if(showbtn1){
        if (GUI.Button(Rect(20,15,80,80),snapBtn)){
        	drip1.Play();
            snapOn = true;
            guiDepth = 6;
            Gui2.guiDepth = 5;
            guiScript2.showbtn2 = true;
            //print("hit gui depth on GUI");
            showbtn1 = false;
        }
        }
           		
		if(snapOn){
				//print("Rotate Bttn Should now be visible");
				if(GUI.Button(Rect(Screen.width-120, Screen.height-120,90,90),rotateBtn)){
						drip1.Play();
						cubeRotateCounter++;
						if(cubeRotateCounter%2==1){ 
            				tellCubeRotate=true;
            				cubeRotateCounter++;
           }   
       }
    
}
}
}




