



var title : String;
var stringToEdit2 : String; 
var myStyle: GUIStyle; 

function Start (){
  
  	myStyle.normal.textColor = Color.white;
  	title = "Name";
  }
      
class Project_Name extends MonoBehaviour {
function OnGUI(){

	stringToEdit2 = PlayerPrefs.GetString(title);
	GUI.skin.settings.cursorColor = Color.white;
	stringToEdit2 = GUI.TextField (Rect (Screen.width-215, 15, 200, 40), stringToEdit2, 30, myStyle);
	PlayerPrefs.SetString(title, stringToEdit2);
}

}