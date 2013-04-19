


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
private var targetSpeedX = new Vector3();

var guiSnapOn: Gui;
 
function OnMouseDown() 
{
    dragging = true;
}

function Update () {

//print("transform.rotation = " + transform.rotation);

//Mouse can drag/rotate the cube while holding it down.
 if (Input.GetMouseButton(0) && dragging) {
        speed = new Vector3(-Input.GetAxis ("Mouse X"), Input.GetAxis("Mouse Y"), 0);
        avgSpeed = Vector3.Lerp(avgSpeed,speed, Time.deltaTime);
    } else {
        if (dragging) {
            speed = Vector3(0,0,0);
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
        	if (arrayofDistances[i] < lowestVal) 
        	{
            	lowestVal = arrayofDistances[i];
            	lowestIndex = i;
        	}
    	}
    
    print("lowestIndex = " + lowestIndex);

//The snapTo function provides the instructions for how to rotate the cube depending 
//on the index value of the array that is closest to origin
    
    
    if(guiSnapOn.snapOn){
    	SnapTo();
	}
}


function SnapTo()
{


	var t = 0.5;
	
	if(dragging == false)
	{
		var lowestIndexforSwitch = accessThisForLowIndex.lowestIndex; 
	
	    switch(lowestIndexforSwitch){
    	
    	case 0: 
    	
    		//transform.position = Vector3.Lerp(transform.position, Vector3(0, 0, 0), t);
    		transform.eulerAngles = Vector3(0, 0, 0);
    		//print("Snap Forward: CEO");
    	break; 
    	
    	case 1:
    		transform.eulerAngles = Vector3(0, 0, 180);
    		//print("Snap Back: Game Designer");
    	break;
    	
    	case 2:
    		transform.eulerAngles = Vector3(0, 0, 270);
    		//print("Snap Up: CTO");
    	break;
    	
    	case 3:
    		transform.eulerAngles = Vector3(0, 0, 90);
    		//print("Snap down: Legal");
    	break;
    	
    	case 4:
    		transform.eulerAngles = Vector3(0, 90, 0);
    		//print("Snap Right: Art Director");
    	break;
    	    	
    	case 5:
    		transform.eulerAngles = Vector3(0, 270, 0);
    		//print("Snap left: Marketing");
    	break;
    	
    	}
	}
}
