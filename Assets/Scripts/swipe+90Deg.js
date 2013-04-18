


var startTime: float;
var startPos: Vector2;
var minSwipeDist: float = 50;
var maxSwipeTime: float = 50;
var dragStarted: boolean = false;
var swipeDirection: float = 5;
var comfortZone: float;
var couldBeSwipe : boolean;


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

function Update() {

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




    if (Input.GetMouseButton(0)) {
			dragStarted = true;
            startPos = Input.mousePosition;
            startTime = Time.time;
            couldBeSwipe = true;
            }
            
    if(dragStarted && !Input.GetMouseButton(0) && couldBeSwipe){

            var swipeTime = Time.time - startTime;
            var swipeDist = (Input.mousePosition - startPos).magnitude;
            var mousePosEnd = Input.mousePosition;
            var stray: float = mousePosEnd.x - startPos.x;
            
            print("this is the value of stray: "+stray);
            
            if (Mathf.Abs(stray) > comfortZone) {
            	
                couldBeSwipe = false;

             }
             // It's a swiiiiiiiiiiiipe!
            
            	swipeDirection = Mathf.Sign(mousePosEnd.y - startPos.y);
            	HowSpin();
            	dragStarted = false;
            }
      }
      
 function HowSpin(){
            switch(swipeDirection){
            case 1: 
                    transform.eulerAngles = transform.eulerAngles + Vector3(0, 0, -90);
    				print("Up");
    				//dragStarted = false;
    				break;
    		case -1: 
                    transform.eulerAngles = transform.eulerAngles + Vector3(0, 0, 90);
    				print("Down");
    				//dragStarted = false;
    				break;
            }   
}