


//this script is going to say, hey, if the doubleclick%1 is one, then take the tag of the object that the 
//raycast hit, and send it to the script Write_On_PostIt

var inputTextScreen: Write_On_PostIt;
var cube: dots_on_cube;
var scribbleText : Texture;
var writtenUpon: boolean = false;
var regularYel: Texture;


function Start () {

}

function Update () {

//print("this.gameObject =" + this.gameObject);
//transform.rotation = Quaternion.identity;

if (Input.GetMouseButtonDown(0) && cube.doubleclickCounter%2==1) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);

            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.tag == "postit"){
                    inputTextScreen.canType = true;
                    inputTextScreen.this_post_it = hit.collider.gameObject.name;
                    print("hit.collider.gameObject.name =" + hit.collider.gameObject.name);
                 
            }   
    	}
}


if(writtenUpon){
	  
    renderer.material.SetTexture("_MainTex", scribbleText);

}
else if(!writtenUpon){
	renderer.material.SetTexture("_MainTex", regularYel);
}

}