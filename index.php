<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Team Type Calculator</title>
	<script src="pokemonClass.js"></script>
	<style>
		tr {height: 50px; width: 500px;}
		td {Background-Color: lightgray; width: 400px;}
	</style>
</head>

<body>
<!-- 	<h3>Pokemon 1</h3>
	<select id="pokemon1type1">
		<option value="0">None</option>
		<option value="1">Normal</option>
		<option value="2">Fire</option>
		<option value="3">Water</option>
		<option value="4">Electric</option>
		<option value="5">Grass</option>
		<option value="6">Ice</option>
		<option value="7">Fighting</option>
		<option value="8">Poison</option>
		<option value="9">Ground</option>
		<option value="10">Flying</option>
		<option value="11">Psychic</option>
		<option value="12">Bug</option>
		<option value="13">Rock</option>
		<option value="14">Ghost</option>
		<option value="15">Dragon</option>
		<option value="16">Dark</option>
		<option value="17">Steel</option>
		<option value="18">Fairy</option>
	</select>
	<select id="pokemon1type2">
		<option value="0">None</option>
		<option value="1">Normal</option>
		<option value="2">Fire</option>
		<option value="3">Water</option>
		<option value="4">Electric</option>
		<option value="5">Grass</option>
		<option value="6">Ice</option>
		<option value="7">Fighting</option>
		<option value="8">Poison</option>
		<option value="9">Ground</option>
		<option value="10">Flying</option>
		<option value="11">Psychic</option>
		<option value="12">Bug</option>
		<option value="13">Rock</option>
		<option value="14">Ghost</option>
		<option value="15">Dragon</option>
		<option value="16">Dark</option>
		<option value="17">Steel</option>
		<option value="18">Fairy</option>
	</select>-->
	<table id="#table"><tr><td>Pokemon</td><td>Weaknesses</td><td>Resistances</td></tr><tr><td>
		<select id="pokemon1type1">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
		<select id="pokemon1type2">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
	</td><td></td><td></td></tr><tr><td>
		<select id="pokemon2type1">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
		<select id="pokemon2type2">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
	</td><td></td><td></td></tr><tr><td>
		<select id="pokemon3type1">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
		<select id="pokemon3type2">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
	</td><td></td><td></td></tr><tr><td>
				<select id="pokemon3type1">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
		<select id="pokemon3type2">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
	</td><td></td><td></td></tr><tr><td>
				<select id="pokemon3type1">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
		<select id="pokemon3type2">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
	</td><td></td><td></td></tr><tr><td>
				<select id="pokemon3type1">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
		<select id="pokemon3type2">
			<option value="0">None</option>
			<option value="1">Normal</option>
			<option value="2">Fire</option>
			<option value="3">Water</option>
			<option value="4">Electric</option>
			<option value="5">Grass</option>
			<option value="6">Ice</option>
			<option value="7">Fighting</option>
			<option value="8">Poison</option>
			<option value="9">Ground</option>
			<option value="10">Flying</option>
			<option value="11">Psychic</option>
			<option value="12">Bug</option>
			<option value="13">Rock</option>
			<option value="14">Ghost</option>
			<option value="15">Dragon</option>
			<option value="16">Dark</option>
			<option value="17">Steel</option>
			<option value="18">Fairy</option>
		</select>
	</td><td></td><td></td></tr> 
	</table>
	<p id="weakness1">Weaknesses: </p>
	<p id="resistance1">Resistances: </p>
	<button onclick="calculateTeam()">Calculate</button>
</body>
</html>