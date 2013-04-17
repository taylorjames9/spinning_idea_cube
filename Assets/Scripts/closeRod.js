

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

var lowestIndex: int = 0;
//var lowestVal: float; 

function Update () {

		distA = Vector3.Distance(plus_x.position, transform.position);
        distB = Vector3.Distance(neg_x.position, transform.position);
        distC = Vector3.Distance(neg_y.position, transform.position);
        distD = Vector3.Distance(plus_y.position, transform.position);
        distE = Vector3.Distance(neg_z.position, transform.position);
        distF = Vector3.Distance(plus_z.position, transform.position);
        
  		var arrayofDistances : float[];
   		arrayofDistances = new float[6]; 
        
        arrayofDistances[0] = distA;
        arrayofDistances[1] = distB;
        arrayofDistances[2] = distC;
        arrayofDistances[3] = distD;
        arrayofDistances[4] = distE;
        arrayofDistances[5] = distF;
        
        var lowestVal = arrayofDistances[0];
     
        for (var i = 0; i < arrayofDistances.length; i++) {
        	if (arrayofDistances[i] < lowestVal) 
        	{
            	lowestVal = arrayofDistances[i];
            	lowestIndex = i;
            	
        	}
    	}
    
    print("lowestIndex = " + lowestIndex);
}


