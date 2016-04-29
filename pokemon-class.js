var typeNames = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
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
var textOnly = false;

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
        // document.getElementById("weakness" + number).innerHTML = "Weaknesses: " + result.formatOut();
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
        // document.getElementById("resistance" + number).innerHTML = "Resistances: " + result.formatOut();
		return result;
	}
}

function Team(){
    var team = [new Pokemon(1), new Pokemon(2), new Pokemon(3), new Pokemon(4), new Pokemon(5), new Pokemon(6)];
    var allWeaknesses = new List();
    var allResistances = new List();
    var resisted = [];
    this.calcWeakness = function(){
        for(var i=0; i<6; i++){
            for(var j=0; j<18; j++){
                if(team[i].calcWeakness()[j]!=null)
                   allWeaknesses.Add(team[i].calcWeakness()[j]);
                else
                    ;
            }
        }
        return allWeaknesses;
    }
    this.calcResist = function(){
        for(var i=0; i<6; i++){
            for(var j=0; j<18; j++){
                if(team[i].calcResist()[j]!=null)
                   allResistances.Add(team[i].calcResist()[j]);
                else
                    ;
            }
        }
        return allResistances;
    }

    this.update = function(){
        for(var i=0; i<6; i++){
            team[i].updateTypes();
        }
        this.calcWeakness();
        resisted = this.calcResist().Spit();
        for(var i = 0; i<allWeaknesses.Spit().length; i++){
            if(allResistances.Spit().contains(allWeaknesses.Spit()[i])){
                var thisWeak = allWeaknesses.Spit()[i];
                allResistances.Remove(thisWeak);
                allWeaknesses.Remove(thisWeak);
                i--;
            }
        }
        for(var i = 0; i<allResistances.Spit().length; i++){
            if(allWeaknesses.Spit().contains(allResistances.Spit()[i])){
                var thisRes = allResistances.Spit()[i];
                allResistances.Remove(thisRes);
                allWeaknesses.Remove(thisRes);
                i--;
            }
        }
    }

    this.Spit = function(){
        return team;
    }

    this.allWeaknesses = function(){
        return allWeaknesses;
    }
    this.allResistances = function(){
        return allResistances;
    }
    this.resisted = function(){
        return resisted;
    }
}

//Buttons
//*********************************************************************************************

function calculateTeam(){
	team = new Team();
    var rows = document.getElementById("table").children[0].children;
    team.update();
	for(var i=1; i<=6; i++){
		rows[i].children[1].innerHTML = team.Spit()[i-1].calcWeakness().formatOut();
		rows[i].children[2].innerHTML = team.Spit()[i-1].calcResist().formatOut();
	}
	document.getElementById("weaknesses").innerHTML = team.allWeaknesses().Spit().formatOut();
    document.getElementById("resistances").innerHTML = team.allResistances().Spit().formatOut();

    if(textOnly){
        var outstring = "";
        for(var i=0; i<18; i++){
            if(!team.resisted().contains(i)){
                 outstring += typeNames[i].capitalize() + ", ";
            }
        }
        document.getElementById("unresisted").innerHTML = "Un-Resisted: "+ outstring.slice(0, outstring.length-2);
    }
    else{
        document.getElementById("unresisted").innerHTML =  "Un-Resisted: " + makeImages();
        var unResists = document.getElementById("unresisted").children;
        for(var i=0; i<18; i++){
            if(team.resisted().contains(i)){
                unResists[if].style.opacity = 0.2;
            }
        }
    }
}

function reset(){
    var selectBoxes = document.getElementsByTagName("select");
    for (var i = selectBoxes.length - 1; i >= 0; i--) {
        selectBoxes[i].selectedIndex = 0;
    }
    calculateTeam();
}

function toggleText(){
    if(textOnly)
        textOnly = false;
    else
        textOnly = true;
    calculateTeam();
}

//Useful structures and properties
//*********************************************************************************************
function List(){
    var contents = [];
    this.Add = function(item){
        contents[contents.length] = item;
    }
    this.Remove = function(item){
        var result;
        // if(typeof item === 'number'){
        //     result = contents[item];
        //     for(var i = item; i<contents.length; i++){
        //         contents[i] = contents [i+1];
        //     }
        // }
        // if(typeof item === 'string'){

        //Looks for the item
        for(var i = 0; i<contents.length; i++){
            if(contents[i]==item){
                result = i;
                //Shift all the values to fill the gap of the removed
                for(var j = i; j<contents.length; j++){
                    contents[j] = contents [j+1];
                }
                
                //Retains the length
                var temp = [];
                for(var q = 0; q<contents.length; q++){
                    if(typeof contents[q]!== 'undefined'){
                        temp[q] = contents[q];
                    }
                }
                contents = temp;

                break;
            }
        }
        return result;
    }
    this.Spit = function(){
        return contents;
    }
}

function makeOptions(){ //I used this to make the first dropdown list
	list = "<option value=\"0\">None</option>\n";
	for(i = 0; i<18; i++)
		list+="<option value=\""+ (i+1) + "\">"+ typeNames[i] +"</option>\n";
	console.log(list);
}

function makeImages(){
    var typeImages = "";
    for(var i = 0; i<typeNames.length; i++){
        typeImages += "<img src=\"images/" + typeNames[i] + ".jpg\" alt=\"" + typeNames[i].capitalize() + "\">\n";
    }
    return typeImages;
}

Object.defineProperty(String.prototype, "capitalize", {
    value: function capitalize() {
        return this[0].toUpperCase() + this.slice(1);
    }
})

Object.defineProperty(Array.prototype, "contains", {
    value: function contains(item) {
    	var counter = 0;
        while(this[counter]!=null){
        	if(this[counter] == item)
        		return true;
        	counter++;
        }
        return false;
    }
})

Object.defineProperty(Array.prototype, "count", {
    value: function count(item) {
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

Object.defineProperty(Array.prototype, "formatOut", {
    value: function formatOut() {
        var result = "";
        for(var q = 0; q<18; q++){
            if(this.contains(q)){
                if(textOnly){
                    if (result!="")
                        result += ", "
                    if(this.count(q)>1)
                        result += typeNames[q].capitalize() + "*" + this.count(q);
                    else   
                        result += typeNames[q].capitalize();
                }
                else{
                    if(this.count(q)>1)
                        result += "<img src=\"images/" + typeNames[q] + ".jpg\" alt=\"" + typeNames[q].capitalize() + " \">" + "x" + this.count(q) + " ";
                    else   
                        result += "<img src=\"images/" + typeNames[q] + ".jpg\" alt=\"" + typeNames[q].capitalize() + " \">";
                }
            }
        }
        return result;
    	// var counter = 0;
    	// var result = "";
     //    while(this[counter]!=null){
     //    	result+= "<img src=\"" + typeNames[this[counter]] + ".jpg\" alt=\"" + typeNames[this[counter]] + " \">";
     //    	counter++;
     //    	// if(this[counter]!=null)
     //    	// 	result+=", ";
     //    }
     //    return result;
    }
})