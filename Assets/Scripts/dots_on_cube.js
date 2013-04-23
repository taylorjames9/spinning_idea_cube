


var neg_x : Transform;
var plus_x : Transform;
var neg_y : Transform;
var plus_y : Transform;
var neg_z : Transform;
var plus_z : Transform;

var distA : float;
var distB : float;
var distC : float;
var distD : float;
var distE : float;
var distF : float;

var damping : int  = 5;
var accessThisForLowIndex : dots_on_cube;
var originNode: Transform;
var lowestIndex: int = 0;

var rotationSpeed = 1.0;
var lerpSpeed = 1.0;
 
var hitRotateBtn: Gui;

private var speed = new Vector3();
private var avgSpeed = new Vector3();
var dragging = false;
var soundDragging = false;
private var targetSpeedX = new Vector3();

var guiSnapOn: Gui;

var doubleClickTime = 0.5;
var clicked = false;
var lastClickTime = 0.0;
var doubleclickCounter: int = 0;

var dragTimer: float = 0;

var cubeTurn : AudioSource;
 
function OnMouseDown() 
{
    dragging = true;
    //cubeTurn.Play();
    //soundDragging = true;
    dragTimer = Time.time;
}

function OnMouseUp (){

if(dragTimer > 1){

cubeTurn.Play();
dragTimer = 0;

}


}

function Update () {

doubleClick();

//print("transform.rotation = " + transform.rotation);

//Mouse can drag/rotate the cube while holding it down.
 if (Input.GetMouseButton(0) && dragging) {
        speed = new Vector3(-Input.GetAxis ("Mouse X"), Input.GetAxis("Mouse Y"), 0);
        avgSpeed = Vector3.Lerp(avgSpeed,speed*5, Time.deltaTime);
    } else {
        if (dragging) {
            speed = avgSpeed;
            dragging = false;
        }
        var k = Time.deltaTime * lerpSpeed;
        speed = Vector3.Lerp( speed, Vector3.zero, k);   
    }
 
    transform.Rotate( Camera.main.transform.up * speed.x * rotationSpeed, Space.World );
    transform.Rotate( Camera.main.transform.right * speed.y * rotationSpeed, Space.World );


//Records distances betweeen all six node parented to the cube and the Origin node (near the camera)
		distA = Vector3.Distance(plus_x.position, originNode.position);
        distB = Vector3.Distance(neg_x.position, originNode.position);
        distC = Vector3.Distance(neg_y.position, originNode.position);
        distD = Vector3.Distance(plus_y.position, originNode.position);
        distE = Vector3.Distance(neg_z.position, originNode.position);
        distF = Vector3.Distance(plus_z.position, originNode.position);
        
//Puts all distances between nodes a,b,c,d,e,f into an array. 
        var arrayofDistances : float[];
   		arrayofDistances = new float[6]; 
        
        arrayofDistances[0] = distA;
        arrayofDistances[1] = distB;
        arrayofDistances[2] = distC;
        arrayofDistances[3] = distD;
        arrayofDistances[4] = distE;
        arrayofDistances[5] = distF;
        
        var lowestVal = arrayofDistances[0];

//This for loop finds the array index of the node that is closest to the origin.
        for (var  i=0;  i< arrayofDistances.length; i++) {
        	if (arrayofDistances[i] <= lowestVal) 
        	{
            	lowestVal = arrayofDistances[i];
            	lowestIndex = i;
        	}
    	}
    
    //print("lowestIndex = " + lowestIndex);

//The snapTo function provides the instructions for how to rotate the cube depending 
//on the index value of the array that is closest to origin
   
    if(guiSnapOn.snapOn){
    	SnapTo();
	}
}

var speedRot:float = 0.5;
var cube0: Transform;
var cube1: Transform;
var cube2: Transform;
var cube3: Transform;
var cube4: Transform;
var cube5: Transform;

function SnapTo()
{


	var t = 0.5;
	
	if(dragging == false)
	{
		var lowestIndexforSwitch = accessThisForLowIndex.lowestIndex; 
		
	    switch(lowestIndexforSwitch){
    	
    	case 0: 
      		transform.rotation = Quaternion.Lerp(transform.rotation, cube0.rotation, Time.deltaTime * speedRot);
    		//print("t speed of snap = " + speedRot);
    		//if(soundDragging){
    		//cubeTurn.Play();
    		//cubeTurn.PlayDelayed(1);
    		 //cubeTurn.PlayOneShot(cubeTurn, 0.7);
    		//}
    		//print("Snap Forward: CEO");
    	break; 
    	
    	case 1:
    		transform.rotation = Quaternion.Lerp(transform.rotation, cube1.rotation, Time.deltaTime * speedRot);
    		//print("Snap Back: Game Designer");
    		//if(soundDragging){
    		//cubeTurn.Play();
    		//}
    	break;
    	
    	case 2:
    		transform.rotation = Quaternion.Lerp(transform.rotation, cube2.rotation, Time.deltaTime * speedRot);
    		//print("Snap Up: CTO");
    		//if(soundDragging){
    		//cubeTurn.Play();
    		//}
    	break;
    	
    	case 3:
    		transform.rotation = Quaternion.Lerp(transform.rotation, cube3.rotation, Time.deltaTime * speedRot);
    		//print("Snap down: Legal");
    		//if(soundDragging){
    		//cubeTurn.Play();
    		//}
    	break;
    	
    	case 4:
    		transform.rotation = Quaternion.Lerp(transform.rotation, cube4.rotation, Time.deltaTime * speedRot);
    		//print("Snap Right: Art Director");
    		//if(soundDragging){
    		//cubeTurn.Play();
    		//}
    	break;
    	    	
    	case 5:
    		transform.rotation = Quaternion.Lerp(transform.rotation, cube5.rotation, Time.deltaTime * speedRot);
    		//print("Snap left: Marketing");
    		//if(soundDragging){
    		//cubeTurn.Play();
    		//}
    	break;
    	
    	}
	}
}

function doubleClick() {

  if (Input.GetMouseButtonDown(0))
    {
    //cubeTurn.Play();
    //print("inside of mouseClick IF");
        if(clicked)
        {          
            if ((Time.time - lastClickTime) > 0.2)
            {
				//print("too long");
                 //too long, so set this as a first click
                 clicked = true;
                 lastClickTime = Time.time;
                 //cubeTurn.Play();
            }
            else if(doubleclickCounter%2==0)
            {
				transform.localScale.x *= 1.7;
				transform.localScale.y *= 1.7;
				transform.localScale.z *= 1.7;
				//print("Double click");
                 //it was a double click!
                 clicked = false;
                 lastClickTime = 0.0;
                 doubleclickCounter++;
            }
            else if(doubleclickCounter%2==1)
            {
				transform.localScale.x *= 0.58823529;
				transform.localScale.y *= 0.58823529;
				transform.localScale.z *= 0.58823529;
				//cubeTurn.Play();
				//print("Double click");
                 //it was a double click!
                 clicked = false;
                 lastClickTime = 0.0;
                 doubleclickCounter++;
            }
        }
        else
        {
            clicked = true;
            lastClickTime = Time.time;
        }
    }
}