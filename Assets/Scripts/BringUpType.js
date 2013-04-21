

var cubeScript : dots_on_cube;
var canType : boolean = false;
var stringToEdit : String = "Type Here";
var myStyle: GUIStyle;   


   function Update() {
        if (Input.GetMouseButtonDown(0)) {
           print("past_2");
            var hit: RaycastHit;
            var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
            
            if (Physics.Raycast(ray, hit)) {
                if (hit.collider.gameObject.tag == "postit"){
                	print("past_4");
                    canType = true;
            }
        }
    }
}

function OnGUI () {

			if(cubeScript.doubleclickCounter%2==1){
			if(canType){
                       GUI.skin.settings.cursorColor = Color.black;
        				// Make a text field that modifies stringToEdit.
        				stringToEdit = GUI.TextField (Rect (Screen.width/4, Screen.height/4, 300, 300), stringToEdit, 217, myStyle);
				print("Can Type SHould be rockin");
				
				
            }
        }
    }