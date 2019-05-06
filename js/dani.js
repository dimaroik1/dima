	var x = document.getElementById("f1");
	var y = document.getElementById("f2");
	var button = document.getElementById("f3")

	button.addEventListener("click", function(){
		console.log(x.value);
		console.log(y.value);
	})