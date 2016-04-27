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

	this.updateTypes = function(){
		type1 = document.getElementById("pokemon" + number + "type1").selectedIndex;
		type2 = document.getElementById("pokemon" + number + "type2").selectedIndex;
	}

	this.calcWeakness = function(){
        var result = [];
        var index = 0;
        for(i = 0; i<18; i++){
            if(chart[type1][i] * chart[type2][i] >= 2){
                result[index] = i;
                index++;
            }
        }
        // document.getElementById("weakness" + number).innerHTML = "Weaknesses: " + result.ToString();
        return result;
	}

	this.calcResist = function(){
		var result = [];
		var index = 0;
        for(i = 0; i<18; i++){
            if(chart[type1][i] * chart[type2][i] <= 0.5){
                result[index] = i;
                index++;
            }
        }
        // document.getElementById("resistance" + number).innerHTML = "Resistances: " + result.ToString();
		return result;
	}

    this.test = function(){
        return number;
    }
}

function calcTeamWeakness(){
    var result = "";
    var allWeaknesses = [];
	for(var i=0; i<6; i++){
        for(var j=0; j<18; j++){
            if(team[i].calcWeakness()[j]!=null)
               allWeaknesses[allWeaknesses.length] = team[i].calcWeakness()[j];
            else
                ;
        }
	}
    for(var q = 0; q<18; q++){
        if(allWeaknesses.Contains(q)){
            if (result!="")
                result += ", "
            if(allWeaknesses.Count(q)>1)
                result += typeNames[q] + "*" + allWeaknesses.Count(q);
            else   
                result += typeNames[q];
        }
    }
    return result;
}

function calcTeamResistance(){
    var result = "";
    var allResistances = [];
    for(var i=0; i<6; i++){
        for(var j=0; j<18; j++){
            if(team[i].calcResist()[j]!=null)
               allResistances[allResistances.length] = team[i].calcResist()[j];
            else
                ;
        }
    }
    for(var q = 0; q<18; q++){
        if(allResistances.Contains(q)){
            if (result!="")
                result += ", "
            if(allResistances.Count(q)>1)
                result += typeNames[q] + "*" + allResistances.Count(q);
            else   
                result += typeNames[q];
        }
    }
    return result;
}

function calculateTeam(){
	team = [new Pokemon(1), new Pokemon(2), new Pokemon(3), new Pokemon(4), new Pokemon(5), new Pokemon(6)];
	for(var i=0; i<6; i++){
		team[i].updateTypes();
	}

	var ugh = document.getElementById("table").children;
    var rows = ugh[0].children;
	// console.log(rows[2].tagName);
 //    console.log(rows[2].children[0].tagName);

	for(var i=1; i<=6; i++){
		rows[i].children[1].innerHTML = team[i-1].calcWeakness().ToString();
		rows[i].children[2].innerHTML = team[i-1].calcResist().ToString();
	}
	// myPokemon = new Pokemon(1); //this format makes it global automatically, javascript is weird
	// myPokemon.updateTypes();
	// myPokemon.calcWeakness();
	// myPokemon.calcResist();

	document.getElementById("weaknesses").innerHTML = "Weaknesses: " + calcTeamWeakness();
    document.getElementById("resistances").innerHTML = "Resistances: " + calcTeamResistance();



	// var testArray = [1, 3, 5];
	// console.log("this is testArray: " + testArray.ToString())
	// console.log("does it contain 2? " + testArray.Contains(2));
	// console.log("does it contain 1? " + testArray.Contains(1));
	// console.log("does it contain 3? " + testArray.Contains(3));

	// makeOptions();
}

// function arrayToString(incoming, length){
// 	var output = "";
// 	for(i=0; i<length; i++){
// 		output+=incoming[i];
// 		if(i<length-1)
// 			output+=", ";
// 	}
// 	return output;
// }

function makeOptions(){
	list = "<option value=\"0\">None</option>\n";
	for(i = 0; i<18; i++)
		list+="<option value=\""+ (i+1) + "\">"+ typeNames[i] +"</option>\n";
	console.log(list);
}

Object.defineProperty(Array.prototype, "Contains", {
    value: function Contains(item) {
    	var counter = 0;
        while(this[counter]!=null){
        	if(this[counter] == item)
        		return true;
        	counter++;
        }
        return false;
    }
})

Object.defineProperty(Array.prototype, "Count", {
    value: function Count(item) {
        var counter = 0;
        var result = 0;
        while(this[counter]!=null){
            if(this[counter] == item)
                result++;
            counter++;
        }
        return result;
    }
})

Object.defineProperty(Array.prototype, "ToString", {
    value: function ToString() {
    	var counter = 0;
    	var result = "";
        while(this[counter]!=null){
        	result+= typeNames[this[counter]];
        	counter++;
        	if(this[counter]!=null)
        		result+=", ";
        }
        return result;
    }
})