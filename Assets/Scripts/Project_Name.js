



var title : String;
var stringToEdit2 : String; 
var myStyle: GUIStyle; 

function Start (){
  
  	myStyle.normal.textColor = Color.gray;
  	title = "Name";
  	stringToEdit2 = "Project Name";
  	PlayerPrefs.SetString("Name", stringToEdit2);
  }
      
class Project_Name extends MonoBehaviour {
function OnGUI(){

	stringToEdit2 = PlayerPrefs.GetString(title);
	GUI.skin.settings.cursorColor = Color.white;
	stringToEdit2 = GUI.TextField (Rect (Screen.width-230, 40, 200, 30), stringToEdit2, 20, myStyle);
	PlayerPrefs.SetString(title, stringToEdit2);
}

}