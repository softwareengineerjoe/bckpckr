// console.log("Hello World")

function login() {
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	if (username=="admin" && password=="user") {
		alert("login succesfully!");
		
		} else {
		alert("account does not exist!");
	}
}