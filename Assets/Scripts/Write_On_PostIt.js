

var cubeScript : dots_on_cube;
var canType : boolean = false;
var this_post_it: String;
var stringToEdit : String = null; 

var myStyle: GUIStyle;   
var close: closeX;
var touched: touched_Postit;

function Start(){
	
}


class Write_On_PostIt extends MonoBehaviour {
static var guiDepth : int = 1;

function OnGUI () {

stringToEdit = PlayerPrefs.GetString(this_post_it);
GUI.depth = guiDepth;
print("this_post_it =" + this_post_it);
print("this is the stringToEdit in Write on Post it" + stringToEdit);

			if(cubeScript.doubleclickCounter%2==1){
			if(canType){
				close.closeIt = true;
            	GUI.skin.settings.cursorColor = Color.black;
        	    // Make a text field that modifies stringToEdit.
        		stringToEdit = GUI.TextField (Rect (Screen.width/4, Screen.height/4, 300, 300), stringToEdit, 217, myStyle);

				PlayerPrefs.SetString(this_post_it, stringToEdit);
				//print (PlayerPrefs.GetString(this_post_it));
				if(stringToEdit.Length > 0){
					touched.writtenUpon = true;
				
				}
				else if(stringToEdit.Length == 0){
					touched.writtenUpon = false;
				}
            }
        }
    }
    }