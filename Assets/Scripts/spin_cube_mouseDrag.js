
var neg_x : Transform;
var plus_x : Transform;
var neg_y : Transform;
var plus_y : Transform;
var neg_z : Transform;
var plus_z : Transform;

var snapSpeed = 1.0;


var qrotation : Quaternion;
var qRotationFrom : Quaternion;

var rotationSpeed = 1.0;
var lerpSpeed = 1.0;
 
private var speed = new Vector3();
private var avgSpeed = new Vector3();
private var dragging = false;
private var targetSpeedX = new Vector3();
 
function OnMouseDown() 
{
    dragging = true;
}
 
function Update () 
{
 
    if (Input.GetMouseButton(0) && dragging) {
        speed = new Vector3(-Input.GetAxis ("Mouse X"), Input.GetAxis("Mouse Y"), 0);
        avgSpeed = Vector3.Lerp(avgSpeed,speed,Time.deltaTime);
    } else {
        if (dragging) {
            speed = Vector3(0,0,0);
            dragging = false;
        }
        var i = Time.deltaTime/2 * lerpSpeed;
        speed = Vector3.Lerp( speed, Vector3.zero, i);   
    }
 
    transform.Rotate( Camera.main.transform.up * speed.x * rotationSpeed, Space.World );
    transform.Rotate( Camera.main.transform.right * speed.y * rotationSpeed, Space.World );
 
SnapTo();

}


function SnapTo()
{
	if(dragging == false){
 		if(transform.rotation.y < 45 && transform.rotation.y > 315 && transform.rotation.z < 45 && transform.rotation.z > 315){
 			qrotation = Quaternion.LookRotation(plus_x.position);
 			qRotationFrom = Quaternion.LookRotation(transform.position);
 			 transform.rotation = Quaternion.Lerp(qRotationFrom, qrotation, Time.deltaTime * snapSpeed);
 			 print("We should be snapping to plus_x object");
 
        }
        if(transform.rotation.y < 225  && transform.rotation.y > 135 && transform.rotation.z < 225 && transform.rotation.z > 135){
 			qrotation = Quaternion.LookRotation(neg_x.position);
 			qRotationFrom = Quaternion.LookRotation(transform.position);
 			transform.rotation = Quaternion.Lerp(qRotationFrom, qrotation, Time.deltaTime * snapSpeed);
        	 print("We should be snapping to neg_x object");
        }
}
}

/*
	if(dragging = false){
 		if(transform.rotation.x < 45 && transform.rotation.x > 315 && transform.rotation.y < 45 && transform.rotation.y > 315 && transform.rotation.z < 45 && transform.rotation.z > 315){
 			var qrotation = Quaternion.LookRotation(plus_x.position);
 			 ThisTransform.rotation = Quaternion.Lerp(ThisTransform.rotation, qrotation, Time.deltaTime * speed);
 
        }
        if(transform.rotation.x < NUM && transform.rotation.x > NUM && transform.rotation.y < 225  && transform.rotation.y > 135 && transform.rotation.z < NUM && transform.rotation.z > NUM){
 			var qrotation = Quaternion.LookRotation(neg_x.position);
 			 ThisTransform.rotation = Quaternion.Lerp(ThisTransform.rotation, qrotation, Time.deltaTime * speed);
 
        }
        
        
        if(transform.rotation.x < NUM && transform.rotation.x > NUM && transform.rotation.y < NUM && transform.rotation.y > NUM && transform.rotation.z < NUM && transform.rotation.z > NUM){
 			var qrotation = Quaternion.LookRotation(neg_y.position);
 			 ThisTransform.rotation = Quaternion.Lerp(ThisTransform.rotation, qrotation, Time.deltaTime * speed);
 
        }
        if(transform.rotation.x < NUM && transform.rotation.x > NUM && transform.rotation.y < NUM && transform.rotation.y > NUM && transform.rotation.z < NUM && transform.rotation.z > NUM){
 			var qrotation = Quaternion.LookRotation(plus_y.position);
 			 ThisTransform.rotation = Quaternion.Lerp(ThisTransform.rotation, qrotation, Time.deltaTime * speed);
 
        }
        if(transform.rotation.x < NUM && transform.rotation.x > NUM && transform.rotation.y < NUM && transform.rotation.y > NUM && transform.rotation.z < NUM && transform.rotation.z > NUM){
 			var qrotation = Quaternion.LookRotation(neg_z.position);
 			 ThisTransform.rotation = Quaternion.Lerp(ThisTransform.rotation, qrotation, Time.deltaTime * speed);
 
        }
        if(transform.rotation.x < NUM && transform.rotation.x > NUM && transform.rotation.y < NUM && transform.rotation.y > NUM && transform.rotation.z < NUM && transform.rotation.z > NUM){
 			var qrotation = Quaternion.LookRotation(plus_z.position);
 			 ThisTransform.rotation = Quaternion.Lerp(ThisTransform.rotation, qrotation, Time.deltaTime * speed);
 
        }
    }
}*/