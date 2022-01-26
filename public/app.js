document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("actuator").onclick = function clicked(e) {
		document.getElementById("up").click()
	}

	document.getElementById("up").onchange = function changed() {
		console.log("file submitted");
		document.getElementById("up-submit").click()
	}
})