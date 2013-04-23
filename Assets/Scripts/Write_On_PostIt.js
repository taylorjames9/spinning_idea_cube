

var cubeScript : dots_on_cube;
var canType : boolean = false;



var this_post_it = "";
var stringToEdit : String = ""; 


var myStyle: GUIStyle;   
//var myStyleX: GUIStyle; 


function Start(){
	
}

function OnGUI () {


stringToEdit = PlayerPrefs.GetString(this_post_it);

print("this_post_it =" + this_post_it);
print("this is the stringToEdit in Write on Post it" + stringToEdit);

			if(cubeScript.doubleclickCounter%2==1){
			if(canType){
			
            	GUI.skin.settings.cursorColor = Color.black;
        	    // Make a text field that modifies stringToEdit.
        		stringToEdit = GUI.TextField (Rect (Screen.width/4, Screen.height/4, 300, 300), stringToEdit, 217, myStyle);

				PlayerPrefs.SetString(this_post_it, stringToEdit);
				//print (PlayerPrefs.GetString(this_post_it));

            }
        }
    }