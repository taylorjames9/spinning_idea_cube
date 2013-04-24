

var cubeScript : dots_on_cube;
var canType : boolean = false;
var this_post_it: String;
var myPostit: String;
var stringToEdit : String = null; 

var myStyle: GUIStyle;   
var close: closeX;

var writtenUpon: boolean = false;

function Start(){
	this_post_it = "art";
	myPostit = "postit";
}


function Update(){

	 

}

class Write_On_PostIt extends MonoBehaviour {
static var guiDepth : int = 1;

function OnGUI () {
stringToEdit = PlayerPrefs.GetString(this_post_it);
GUI.depth = guiDepth;
			if(cubeScript.doubleclickCounter%2==1){
			if(canType){
				close.closeIt = true;
            	GUI.skin.settings.cursorColor = Color.black;
        	    // Make a text field that modifies stringToEdit.
        		stringToEdit = GUI.TextField (Rect (Screen.width/4, Screen.height/4, 300, 300), stringToEdit, 217, myStyle);
				PlayerPrefs.SetString(this_post_it, stringToEdit);

            }
        }
    }
}