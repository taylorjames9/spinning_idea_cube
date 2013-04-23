


//this script is going to say, hey, if the doubleclick%1 is one, then take the tag of the object that the 
//raycast hit, and send it to the script Write_On_PostIt

var inputTextScreen: Write_On_PostIt;
var cube: dots_on_cube;
var scribbleText : Texture;
var GuiWrite: Write_On_PostIt;
var storingHit: GameObject;
var regularYel: Texture;

function Start () {

}

function Update () {

var writtenUpon: boolean = false;

if (Input.GetMouseButtonDown(0) && cube.doubleclickCounter%2==1) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);

            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.tag == "postit"){
                    inputTextScreen.canType = true;
                    inputTextScreen.this_post_it = hit.collider.gameObject.name;
                    storingHit = hit.collider.gameObject;
                    print("hit.collider.gameObject.name =" + hit.collider.gameObject.name);               
            }            
    	}
	}
	
	            	 if(GuiWrite.writtenUpon){
    		storingHit.renderer.material.SetTexture("_MainTex", scribbleText);
		}
	 			else if(!GuiWrite.writtenUpon){
			storingHit.renderer.material.SetTexture("_MainTex", regularYel);
		}
	
}