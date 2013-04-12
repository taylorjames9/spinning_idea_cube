
var speed = 5; 
var spin = 5.0;

var drag = 0.9; //rate of "slow-down"
private var currentSpin = 0.0; //spin-speed


function Start () {

}

function Update () {

//currentSpin = currentSpin * drag;

//transform.Rotate(Vector3.up * touchDeltaPosition.x * Time.deltaTime * speed);

transform.Rotate(0,1,0.5);

}


