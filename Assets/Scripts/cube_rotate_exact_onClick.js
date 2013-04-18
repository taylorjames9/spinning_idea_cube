
var rotating : boolean = false;
var rotateSpeed : int = 100;

function OnMouseDown()

{

   if (!rotating) {

      rotating = true;
      var curRot : float = 0;
      var startRot : float = transform.eulerAngles.y;
      while (curRot < 90) {

         curRot += rotateSpeed * Time.deltaTime;
         transform.eulerAngles.y = startRot + curRot;
         yield;

      }

      transform.eulerAngles.y = Mathf.Round(startRot + 90);

      rotating = false;

   }

}