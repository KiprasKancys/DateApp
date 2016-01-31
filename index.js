// index.js

function begin(){
	var convert_button = document.getElementById("convert_button");
	
	convert_button.addEventListener("click", convertDate, false);
}

function convert_button(){
	var date = document.getElementById("date").value;
	var reply = document.getElementById("reply").value;
	
	reply.innerHTML = "Input incorrect, try again.";
	
}

window.addEventListener("load", begin, false);

