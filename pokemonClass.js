var typeNames = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy']
var chart = [ 
    [001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001], //None
    [001, 001, 001, 001, 001, 001, 002, 001, 001, 001, 001, 001, 001, 000, 001, 001, 001, 001], //Normal
    [001, 0.5, 002, 001, 0.5, 0.5, 001, 001, 002, 001, 001, 0.5, 002, 001, 001, 001, 0.5, 0.5], //Fire
    [001, 0.5, 0.5, 002, 002, 0.5, 001, 001, 001, 001, 001, 001, 001, 001, 001, 001, 0.5, 001], //Water
    [001, 001, 001, 0.5, 001, 001, 001, 001, 002, 0.5, 001, 001, 001, 001, 001, 001, 0.5, 001], //Electric
    [001, 002, 0.5, 0.5, 0.5, 002, 001, 002, 0.5, 002, 001, 002, 001, 001, 001, 001, 001, 001], //Grass
    [001, 002, 001, 001, 001, 0.5, 002, 001, 001, 001, 001, 001, 002, 001, 001, 001, 002, 001], //Ice
    [001, 001, 001, 001, 001, 001, 001, 001, 001, 002, 002, 0.5, 0.5, 001, 001, 0.5, 001, 002], //Fighting
    [001, 001, 001, 001, 0.5, 001, 0.5, 0.5, 002, 001, 002, 0.5, 001, 001, 001, 001, 001, 0.5], //Poison
    [001, 001, 002, 000, 002, 002, 001, 0.5, 001, 001, 001, 001, 0.5, 001, 001, 001, 001, 001], //Ground
    [001, 001, 001, 002, 0.5, 002, 0.5, 001, 000, 001, 001, 0.5, 002, 001, 001, 001, 001, 001], //Flying
    [001, 001, 001, 001, 001, 001, 0.5, 001, 001, 001, 0.5, 002, 001, 002, 001, 002, 001, 001], //Psychic
    [001, 002, 001, 001, 0.5, 001, 0.5, 001, 0.5, 002, 001, 001, 002, 001, 001, 001, 001, 001], //Bug
    [0.5, 0.5, 002, 001, 002, 001, 002, 0.5, 002, 0.5, 001, 001, 001, 001, 001, 001, 002, 001], //Rock
    [000, 001, 001, 001, 001, 001, 000, 0.5, 001, 001, 001, 0.5, 001, 002, 001, 002, 001, 001], //Ghost
    [001, 0.5, 0.5, 0.5, 0.5, 002, 001, 001, 001, 001, 001, 001, 001, 001, 002, 001, 001, 002], //Dragon
    [001, 001, 001, 001, 001, 001, 002, 001, 001, 001, 000, 002, 001, 0.5, 001, 0.5, 001, 002], //Dark
    [0.5, 002, 001, 001, 0.5, 0.5, 002, 000, 002, 0.5, 0.5, 0.5, 0.5, 001, 0.5, 001, 0.5, 0.5], //Steel
    [001, 001, 001, 001, 001, 001, 0.5, 002, 001, 001, 001, 0.5, 001, 001, 000, 0.5, 002, 001] //Fairy
];

function Pokemon(arg){
	var number = arg;
	var type1 = 0;
	var type2 = 0;

	this.changeType = function(slot, type){
		if(slot == 1)
			type1 = type;
		if(slot == 2)
			type2 = type;
	}

	this.calcWeakness = function(){
        var result = [];
        var index = 0;
        for(i = 0; i<18; i++){
            if(chart[type1][i] * chart[type2][i] >= 2){
                result[index] = typeNames[i];
                index++;
            }
        }
        document.getElementById("weakness" + number).innerHTML = "Weaknesses: " + arrayToString(result, index);
        return arrayToString(result, index);
	}

	this.calcResist = function(){
		var result = [];
		var index = 0;
        for(i = 0; i<18; i++){
            if(chart[type1][i] * chart[type2][i] <= 0.5){
                result[index] = typeNames[i];
                index++;
            }
        }
        document.getElementById("resistance" + number).innerHTML = "Resistances: " + arrayToString(result, index);
		return arrayToString(result, index);
	}
}

function calcTeamWeakness(){
	myPokemon.calcWeakness();
}

function calcTeamResistance(){
	myPokemon.calcResist();
}

function calculateTeam(){
	myPokemon = new Pokemon(1); //this format makes it global automatically, javascript is weird
	myPokemon.changeType(1, document.getElementById("pokemon1type1").options[document.getElementById("pokemon1type1").selectedIndex].value);
	myPokemon.changeType(2, document.getElementById("pokemon1type2").options[document.getElementById("pokemon1type2").selectedIndex].value);
	calcTeamWeakness();
	calcTeamResistance();
	// makeOptions();
}

function arrayToString(incoming, length){
	var output = "";
	for(i=0; i<length; i++){
		output+=incoming[i];
		if(i<length-1)
			output+=", ";
	}
	return output;
}

function makeOptions(){
	list = "<option value=\"0\">None</option>\n";
	for(i = 0; i<18; i++)
		list+="<option value=\""+ (i+1) + "\">"+ typeNames[i] +"</option>\n";
	console.log(list);
}