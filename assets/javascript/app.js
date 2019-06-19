$(document).ready(function () {
    var animals = ["monkeys", "birds", "dogs", "fishes", 
    "spiders", "elephants", "cats", "lions"];

	// Add buttons for original animals array
	function renderButtons() {
		$("#animal-buttons").empty();
		for (i = 0; i < animals.length; i++) {
            $("#animal-buttons").append("<button class='btn btn-success' data-animal='" + animals[i] + "'>"
             + animals[i] + "</button>");
		}
	}

});