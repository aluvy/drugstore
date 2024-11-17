function validateEmail(email) {
	var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
	return password.length;
}

function validateNickname(nickname) {
	return nickname.length;
}

export { validateEmail, validatePassword, validateNickname };
