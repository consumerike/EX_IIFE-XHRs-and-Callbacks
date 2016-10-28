function showCarnivores (carnivores) {
	var output = document.getElementById('meateaters');
	for (var key in carnivores) {
	output.innerHTML += carnivores[key].name + ": " + " " + carnivores[key].era + ",  ";
	}
}	

function showHerbivores (herbivores) {
	var output = document.getElementById('grasseaters');
	for (var key in herbivores) { 
		output.innerHTML += herbivores[key].name + " ";
	}

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);