var Predator = (function(){
	var carnivores = [];
	var herbivores = [];

	return {
		loadCarnivores: function(getFunc) {
			console.log("load carni",getFunc);
			var loader = new XMLHttpRequest();
			loader.open("GET", "carnivores.json");
			loader.send();

			loader.addEventListener("load", function () {
			    carnivores = JSON.parse(this.responseText).meateaters;
			    console.log("var carni", carnivores);
				getFunc(carnivores);
			})

		},


		loadHerbivores: function(refToInvoke) {
			var loader = new XMLHttpRequest();
			loader.open("GET", "herbivores.json");
			loader.send();

			loader.addEventListener("load", function() {
		    	herbivores = JSON.parse(this.responseText).herbivores;
		    	refToInvoke(herbivores);

			})




			}


	}

})(Predator);