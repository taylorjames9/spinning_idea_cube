    
    
var myStyle: GUIStyle;    
var stringToEdit : String = "Hello World";
    
    
    function OnGUI () {
    	GUI.skin.settings.cursorColor = Color.black;
        // Make a text field that modifies stringToEdit.
        stringToEdit = GUI.TextField (Rect (Screen.width/4, Screen.height/4, 300, 300), stringToEdit, 200, myStyle);
    }