function validate(form) {
	fail = validateForename(form.forename.value);
	fail += validateSurname(form.surname.value);
	fail += validateUsername(form.username.value);
	fail += validatePassword(form.password.value);
	fail += validateAge(form.age.value);
	fail += validateEmail(form.email.value);
	
	if (fail == "")
		return true;
	else {
		alert(fail);
		return false;
	}
}

//Basically check if forename is empty
function validateForename(field) {
	return (field == "")  ? "No forename was entered.\n" : "";
}

//Basically check if surname is empty
function validateSurname(field) {
	return (field == "") ? "No surname was entered.\n" : "";
}

function validateUsername(field) {
	if (field =="")
		return "No Username was entered.\n";
	else if (field.length < 5)
		return "Username must be at least 5 characters.\n";
	else if (/[^a-zA-Z0-9_-]/.test(field))
		return "Only a-z, A-Z, 0-9, -and _ allowed in Usernames.\n";
	
	return "";
}

function validatePassword(field) {
	if (field == "")
		return "No password was entered.\n";
	else if (field.length < 6)
		return "Passwords must be at least 6 characters.\n";
	else if (! /[a-z]/.test(field) ||
		!/[A-Z]/.test(field) ||
			 ! /[0-9]/.test(field))
		return "Passwords require one each of a-z, A-Z, and 0-9.\n";
		return "";
}
//Check that the age is valid - adult age

function validateAge(field) {
	if (isNaN(field))
		return "No age was entered.\\n";
	else if (field < 18 || field > 110)
		return "Age must be between 18 and 110.\n";
	return "";
}

function validateEmail(field) {
	if (field == "")
		return "No email was entered.\n";
	else if (!((field.indexOf(".") > 0) &&
	(field.indexOf("@") > 0)) ||
	/[^a-zA-Z0-9.@_-]/.test(field))
	return "The email address is invalid.\n";
	return "";
}
