

var writeOn: Write_On_PostIt;
var scribbleText: Texture;
var regularYel: Texture;
var fetchedGameObjectArray = new Array ();
var fetchedGameObjectSingle: GameObject;
var mePostit : String; 

function Start () {

mePostit = gameObject.tag;

}

function Update () {


print(mePostit);

	if(writeOn.this_post_it == gameObject.name && writeOn.stringToEdit.Length > 0){
		renderer.material.SetTexture("_MainTex", scribbleText);
		PlayerPrefs.SetInt(writeOn.myPostit, 1);
	}

	else if(writeOn.this_post_it == gameObject.name && writeOn.stringToEdit.Length == 0){
		renderer.material.SetTexture("_MainTex", regularYel);
		PlayerPrefs.SetInt(writeOn.myPostit, 0);
	}

fetchedGameObjectArray = GameObject.FindGameObjectsWithTag (writeOn.myPostit);
fetchedGameObjectSingle = fetchedGameObjectArray[0];
//print("fetchedGameObjectSingle" +fetchedGameObjectSingle);

print("PlayerPrefs.GetInt(writeOn.myPostit = " + PlayerPrefs.GetInt(writeOn.myPostit));

if(PlayerPrefs.GetInt(mePostit) == 1)
{
	//print("playerPrefsINT = 1");
	//print("We're in!....1");
	renderer.material.SetTexture("_MainTex", scribbleText);
}

else if(PlayerPrefs.GetInt(mePostit) == 0){
//print("playerPrefsINT = 0");

//print("We're in!....0");
	renderer.material.SetTexture("_MainTex", regularYel);

}

}