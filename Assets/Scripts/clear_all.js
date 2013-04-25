
var writeN: Write_On_PostIt;
var clearStyle: GUIStyle;
var drip2 : AudioSource;


class clear_all extends MonoBehaviour {
function OnGUI()

{
	clearStyle.normal.textColor = Color.gray;
	
 	if (GUI.Button(Rect(Screen.width-150, 100, 100, 20),"Clear All", clearStyle)){
 		drip2.Play();
 	
 		//var postitNum = 
 		for(var i=1; i<54;i++){
			 PlayerPrefs.SetInt((writeN.myPostit)+i, 0);	

 		}
 	
 	
 	
		PlayerPrefs.SetString("art_characters", "");
		PlayerPrefs.SetString("art_fonts", "");
		PlayerPrefs.SetString("art_platformlim", "");
		PlayerPrefs.SetString("art_process", "");
		PlayerPrefs.SetString("art_references", "");
		PlayerPrefs.SetString("art_style", "");
		PlayerPrefs.SetString("art_ui", "");
		PlayerPrefs.SetString("art_work", "");
		PlayerPrefs.SetString("art_worlds", "");
		PlayerPrefs.SetString("ceo_competition", "");
		PlayerPrefs.SetString("ceo_costs", "");
		PlayerPrefs.SetString("ceo_culture", "");
		PlayerPrefs.SetString("ceo_fund", "");
		PlayerPrefs.SetString("ceo_rev", "");
		PlayerPrefs.SetString("ceo_risk", "");
		PlayerPrefs.SetString("ceo_team", "");
		PlayerPrefs.SetString("ceo_timeline", "");
		PlayerPrefs.SetString("ceo_unique", "");
		PlayerPrefs.SetString("ceo_value", "");
		PlayerPrefs.SetString("tech_challenges", "");
		PlayerPrefs.SetString("tech_features", "");
		PlayerPrefs.SetString("tech_innovations", "");
		PlayerPrefs.SetString("tech_maintenance", "");
		PlayerPrefs.SetString("tech_majority", "");
		PlayerPrefs.SetString("tech_platforms", "");
		PlayerPrefs.SetString("tech_references", "");
		PlayerPrefs.SetString("tech_stack", "");
		PlayerPrefs.SetString("gameD_core", "");
		PlayerPrefs.SetString("gameD_deeper", "");
		PlayerPrefs.SetString("gameD_fun", "");
		PlayerPrefs.SetString("gameD_genre", "");
		PlayerPrefs.SetString("gameD_innovation", "");
		PlayerPrefs.SetString("gameD_ref", "");
		PlayerPrefs.SetString("gameD_storyProg", "");
		PlayerPrefs.SetString("gameD_strategies", "");
		PlayerPrefs.SetString("gameD_synergy", "");
		PlayerPrefs.SetString("gameD_world", "");
		PlayerPrefs.SetString("legal_5docs", "");
		PlayerPrefs.SetString("legal_copyR", "");
		PlayerPrefs.SetString("legal_infringement", "");
		PlayerPrefs.SetString("legal_lice", "");
		PlayerPrefs.SetString("legal_other", "");
		PlayerPrefs.SetString("legal_patentable", "");
		PlayerPrefs.SetString("market_brandRep", "");
		PlayerPrefs.SetString("market_channels", "");
		PlayerPrefs.SetString("market_festivals", "");
		PlayerPrefs.SetString("market_influence", "");
		PlayerPrefs.SetString("market_ref", "");
		PlayerPrefs.SetString("market_review sites", "");
		PlayerPrefs.SetString("market_rollout", "");
		PlayerPrefs.SetString("market_segments", "");
		PlayerPrefs.SetString("market_success", "");
		PlayerPrefs.SetString("market_tagline", "");
		PlayerPrefs.SetString("market_tagline", "");
		PlayerPrefs.SetString("Name", "Project Name");
		
	}
}
}