
var neg_x : Transform;
var plus_x : Transform;
var neg_y : Transform;
var plus_y : Transform;
var neg_z : Transform;
var plus_z : Transform;

var fuzzyDot : closeRod;

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
	if(dragging == false)
	{
		var lowestIndexforSwitch = fuzzyDot.lowestIndex; 
	
	    switch(lowestIndexforSwitch){
    	
    	case 0: 
    		transform.eulerAngles = Vector3(0, 0, 0);
    		print("Forward");
    	break; 
    	
    	case 1:
    		transform.eulerAngles = Vector3(0, 0, 180);
    		print("Back");
    	break;
    	
    	case 2:
    		transform.eulerAngles = Vector3(0, 0, 270);
    		print("Up");
    	break;
    	
    	case 3:
    		transform.eulerAngles = Vector3(0, 0, 90);
    		print("down");
    	break;
    	
    	case 4:
    		transform.eulerAngles = Vector3(0, 90, 0);
    		print("to Right");
    	break;
    	    	
    	case 5:
    		transform.eulerAngles = Vector3(0, 270, 0);
    		print("Face Forward");
    	break;
    	
    	}
	}
}

	
	
 		/*if(transform.eulerAngles.x < 45 /*|| transform.eulerAngles.x < 45) && (transform.eulerAngles.y < 45 || transform.eulerAngles.y > 315) && (transform.eulerAngles.z < 45 || transform.eulerAngles.z > 315)){
 			 transform.LookAt(plus_x.position);
 			 print("we should be getting plus x snapping");
        }*/
        
        /*if(transform.eulerAngles.z > 315 && transform.eulerAngles.z < 360|| transform.eulerAngles.y > 135 && transform.eulerAngles.y < 225  && transform.eulerAngles.y > 135 && transform.eulerAngles.z < 225 && transform.eulerAngles.z > 135){
 			 //transform.LookAt(neg_y.position);
 			  transform.eulerAngles = Vector3(0, 0, 0);
 			  print("we should be getting ceo");
 	    }
 	    else if(transform.eulerAngles.z < 45 || transform.eulerAngles.z > 315|| transform.eulerAngles.y > 135 && transform.eulerAngles.y < 225  && transform.eulerAngles.y > 135 && transform.eulerAngles.z < 225 && transform.eulerAngles.z > 135){
 			 //transform.LookAt(neg_y.position);
 			  transform.eulerAngles = Vector3(0, 0, 0);
 			  print("we should be getting CEO");
        }
        else if(transform.eulerAngles.z > 225 && transform.eulerAngles.z < 315|| transform.eulerAngles.y > 135 && transform.eulerAngles.y < 225  && transform.eulerAngles.y > 135 && transform.eulerAngles.z < 225 && transform.eulerAngles.z > 135){
 			 //transform.LookAt(neg_y.position);
 			  transform.eulerAngles = Vector3(0, 0, 270);
 			  print("we should be getting CTO");
        }
        else if(transform.eulerAngles.z > 45 && transform.eulerAngles.z < 135/*|| transform.eulerAngles.y > 135 && transform.eulerAngles.y < 225  && transform.eulerAngles.y > 135 && transform.eulerAngles.z < 225 && transform.eulerAngles.z > 135){
 			 //transform.LookAt(neg_y.position);
 			  transform.eulerAngles = Vector3(0, 0, 90);
 			  print("we should be getting LEGAL");
        }

        else if(transform.eulerAngles.z > 135 && transform.eulerAngles.z < 225|| transform.eulerAngles.y > 135 && transform.eulerAngles.y < 225  && transform.eulerAngles.y > 135 && transform.eulerAngles.z < 225 && transform.eulerAngles.z > 135){
 			 //transform.LookAt(neg_y.position);
 			  transform.eulerAngles = Vector3(0, 0, 180);
 			  print("we should be getting GAME DESIGNER");
        }
	}
}/*

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