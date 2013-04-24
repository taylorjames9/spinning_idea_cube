


//this script is going to say, hey, if the doubleclick%1 is one, then take the tag of the object that the 
//raycast hit, and send it to the script Write_On_PostIt

var inputTextScreen: Write_On_PostIt;
var cube: dots_on_cube;
var scribbleText : Texture;
var GuiWrite: Write_On_PostIt;
var regularYel: Texture;

function Update () {



var writtenUpon: boolean = false;
if (Input.GetMouseButtonDown(0) && cube.doubleclickCounter%2==1) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);

            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.tag == "postit1" || hit.collider.gameObject.tag =="postit2" || hit.collider.gameObject.tag =="postit3" || hit.collider.gameObject.tag =="postit4" || hit.collider.gameObject.tag =="postit5" || hit.collider.gameObject.tag =="postit6" || hit.collider.gameObject.tag =="postit7" || hit.collider.gameObject.tag =="postit8" || hit.collider.gameObject.tag =="postit9" || hit.collider.gameObject.tag =="postit10" || hit.collider.gameObject.tag =="postit11" || hit.collider.gameObject.tag =="postit12" || hit.collider.gameObject.tag =="postit13" || hit.collider.gameObject.tag =="postit14" || hit.collider.gameObject.tag =="postit15" || hit.collider.gameObject.tag =="postit16" || hit.collider.gameObject.tag =="postit17" || hit.collider.gameObject.tag =="postit18" || hit.collider.gameObject.tag =="postit19" || hit.collider.gameObject.tag =="postit20" || hit.collider.gameObject.tag =="postit21" || hit.collider.gameObject.tag =="postit22" || hit.collider.gameObject.tag =="postit23" || hit.collider.gameObject.tag =="postit24" || hit.collider.gameObject.tag =="postit25" || hit.collider.gameObject.tag =="postit26" || hit.collider.gameObject.tag =="postit27" || hit.collider.gameObject.tag =="postit28" || hit.collider.gameObject.tag =="postit29" || hit.collider.gameObject.tag =="postit30" || hit.collider.gameObject.tag =="postit31" || hit.collider.gameObject.tag =="postit32" || hit.collider.gameObject.tag =="postit33" || hit.collider.gameObject.tag =="postit34" || hit.collider.gameObject.tag =="postit35" || hit.collider.gameObject.tag =="postit36" || hit.collider.gameObject.tag =="postit37" || hit.collider.gameObject.tag =="postit38" || hit.collider.gameObject.tag =="postit39" || hit.collider.gameObject.tag =="postit40" ||hit.collider.gameObject.tag =="postit41" || hit.collider.gameObject.tag =="postit42" || hit.collider.gameObject.tag =="postit43" || hit.collider.gameObject.tag =="postit44" || hit.collider.gameObject.tag =="postit45" || hit.collider.gameObject.tag =="postit46" || hit.collider.gameObject.tag =="postit47" || hit.collider.gameObject.tag =="postit48" || hit.collider.gameObject.tag =="postit49" || hit.collider.gameObject.tag =="postit50" || hit.collider.gameObject.tag =="postit51" || hit.collider.gameObject.tag =="postit52" || hit.collider.gameObject.tag =="postit53" || hit.collider.gameObject.tag =="postit54" || hit.collider.gameObject.tag =="postit55" || hit.collider.gameObject.tag =="postit56" || hit.collider.gameObject.tag =="postit57" || hit.collider.gameObject.tag =="postit58" || hit.collider.gameObject.tag =="postit59"){
                    inputTextScreen.canType = true;
                    inputTextScreen.this_post_it = hit.collider.gameObject.name;
                    inputTextScreen.myPostit = hit.collider.gameObject.tag;
                    
                    //print("hit.collider.gameObject.name =" + hit.collider.gameObject.name);               
            }         //print("inputTextScreen.myPostit = " + inputTextScreen.myPostit);                                                                                                
    }
}
}