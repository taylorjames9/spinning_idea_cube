

var writeOn: Write_On_PostIt;
var scribbleText: Texture;
var regularYel: Texture;



function Start () {

}

function Update () {


	if(writeOn.this_post_it == gameObject.name && writeOn.stringToEdit.Length > 0){
		renderer.material.SetTexture("_MainTex", scribbleText);

	}

	else if(writeOn.this_post_it == gameObject.name && writeOn.stringToEdit.Length == 0){
		renderer.material.SetTexture("_MainTex", regularYel);

	}
}