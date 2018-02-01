var armCities = ["Gyumri","Aparan","Yerevan","Vanadzor"];
var rusCities = ["Moscow","Saint Petersburg","Rostov-on-Don","Chelyabinsk"];
var geoCities = ["Kutaisi","Tbilisi","Kobuleti","Batumi"];
function choose(){
	var x = document.getElementById("Sel1");
	var y = document.getElementById("Sel2");
	switch(x.value){
		case 'arm':
		for(i = 0; i < armCities.length; i++){
			document.getElementById("Opt" + i).innerHTML = armCities[i];
		}
		break;
		case "rus":
		for(i = 0; i < rusCities.length; i++){
			document.getElementById("Opt" + i).innerHTML = rusCities[i];
		}
		break;
		case "geo":
		for(i = 0; i < geoCities.length; i++){
			document.getElementById("Opt" + i).innerHTML = geoCities[i];
		}
	}
}