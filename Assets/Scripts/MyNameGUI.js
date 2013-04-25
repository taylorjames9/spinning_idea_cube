

var myStyle: GUIStyle; 

  function Start (){
  
  	myStyle.normal.textColor = Color.gray;
  
  }
      

function OnGUI(){

    GUI.Label (Rect (20, Screen.height - 50, 100, 20), "\"Idea Cube\"\nCreated By: \nJames A. Taylor", myStyle);
    GUI.Label (Rect (Screen.width/2-130, Screen.height - 20, 100, 20), "Drag Cube to Rotate  *  *  Double-click to Enlarge", myStyle);

}