

var snapBtn : Texture;
var noSnapBtn : Texture;
var rotateBtn: Texture;


var snapOn: boolean = false;
var tellCubeRotate: boolean = false;
var buttonUp: boolean = true;



var mainCube: Transform;

var cubeRotateCounter: int = 0;
//cubeRotate: boolean = false;

function Start () {

tellCubeRotate = false;

}


function OnGUI ()

{
        if (GUI.Button(Rect(20,10,40,40),snapBtn)){
            snapOn = true;
            //print("snapping is on");
            
           
        }
            
        if (GUI.Button(Rect(70,10,40,40),noSnapBtn)){
			snapOn = false;
			//print("snapping is off");
			}
			
		if(snapOn){
				print("Rotate Bttn Should now be visible");
				if(GUI.Button(Rect(Screen.width-70, Screen.height-70,50,50),rotateBtn)){
						//cubeRotate = true;
						cubeRotateCounter++;
						if(cubeRotateCounter%2==1){ 
            				tellCubeRotate=true;
            				cubeRotateCounter++;
            }   
        }
     }
}