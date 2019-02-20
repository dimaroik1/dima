var str = prompt("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.")
var a = []
for (let i = 0; i<str.length; i++){
	if (str[i] == "a"){
	a.push(i);
    }
}
alert(a);