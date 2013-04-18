	
	
var cubeScript : dots_on_cube; 
var guiScript: Gui;
	
	
function Update(){
	
	if(!cubeScript.dragging && guiScript.tellCubeRotate == true){

		transform.rotation *= Quaternion.Euler(-90, 0, 0);
		
		print("Cube should have just rotated 90 Degrees counterclockwise");
		guiScript.tellCubeRotate = false;
	} 
}