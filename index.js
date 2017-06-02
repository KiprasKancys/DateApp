// index.js

function begin(){
	var convert_button = document.getElementById("convert_button");
	convert_button.addEventListener("click", convertDateFun, false);
}

function convertDateFun(){
	var temp = document.getElementById("date").value;
	var para = document.getElementById("para").value;
	if (para == "") {
		convertDate(temp);
	} else {
		getParagraph();
	}
}

function convertDate(ddate){
	var temp = ddate.split("/");
	var today = new Date();
	var yyyy = today.getFullYear();
	var day = temp[0];
	var month = temp[1];
	var year = temp[2];
	if (day > 0 && day < 32 && month > 0 && month < 13 && year > 1900 && year < yyyy){
		document.getElementById('reply').value = year + "-" + month + "-" + day;
		if (year > yyyy-18){
			document.getElementById('comment').innerHTML = "Age under 18";
		} else {
			document.getElementById('comment').innerHTML = "";
		}
	} else {
		document.getElementById('reply').value = "";
		document.getElementById('comment').innerHTML = "Input is not a date";
	}
}

function getParagraph(){
	var eilute = document.getElementById("para").value.split("\n");
	var message = [];
	
	for (i = 0; i < eilute.length-1; i++) {
		
		var temp = eilute[i].split("\t");
		var distance = temp[0];
		var name = temp[1];
		var surname = temp[2];
		var date = temp[3];
		var town = temp[4];
		var country = temp[5];
		var gender = temp[6];
		var club = temp[7];
		var tshirt = temp[8];
		var email = temp[9];
		var datee = temp[10];
		var phone = temp[11];
		var time1 = temp[12];
		var time2 = temp[13];
		var time3 = temp[14];
	
		var time;
		switch(distance) {
			case "Marathon":
				distance = "Maratonas";
				time = time1;
				break;
			case "Half marathon":
				distance = "„RIMI Pusmaratonis“";
				time = time2;
				break;
			case "10 km":
				distance = "EUROCASH1 10km bėgimas";
				time = time3;
				break;
			case "4.2 km":
				distance = "Rimi šeimos bėgimas 4.2 km";
				time = "";
				break;
		};
		

		switch(time) {
			case "more than in 2.30 h":
				time = "2.30 h < ";
				break;
			case "less than in 1.30 h":
				time = " < 1.30 h";
				break;
			case "less than in 3 h.":
				time = " < 3.00 h";
				break;
			case "more than in 5 h":
				time = "5.00 h <";
				break;
			default:
				break;
		};
		
		switch(gender) {
			case "M":
				gender = "Vyras";
				break;
			case "F":
				gender = "Moteris";
				break;
		};
		
		var temp = date.split("/");
		var today = new Date();
		var yyyy = today.getFullYear();
		var day = temp[0];
		var month = temp[1];
		var year = temp[2];
		if (day > 0 && day < 32 && month > 0 && month < 13 && year > 1900 && year < yyyy){
			date = year + "-" + month + "-" + day;
			if (year > yyyy-18){
				document.getElementById('comment2').innerHTML = "Age under 18";
			} else {
				document.getElementById('comment2').innerHTML = "";
			}
		} else {
			document.getElementById('comment2').innerHTML = "Input is not a date";
		}
		

		
		message.push(distance + "\t" + name + "\t" + surname + "\t" + gender + "\t" + date + "\t" + town +
		"\t" + country + "\t" + " " + "\t" + phone + "\t" + tshirt + "\t" + time + "\t" + club);
		
		document.getElementById('reply2').innerHTML = message.join("\n");
	}
}


window.addEventListener("load", begin, false);
