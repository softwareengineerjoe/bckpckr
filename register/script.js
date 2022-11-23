// console.log("Hello World")

function registerUser() {
	let firstName=document.getElementById("first-name").value;
	let lastName=document.getElementById("last-name").value;
	let emailAddress=document.getElementById("email-address").value;
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	if (firstName !== "" && lastName !== "" && emailAddress !== "" && username !== "" && password !== "") {
		alert(`${firstName} has successfully registered!`)
	} else {
		alert("Please complete all the required fields to register")
	}
}