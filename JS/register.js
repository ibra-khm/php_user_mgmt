

let form = document.getElementById("registerForm");
let fullname = document.getElementById("registerName");
let email = document.getElementById("registerEmail");
let phone = document.getElementById("phoneNum");
let dob = document.getElementById("registerDOB");
let password = document.getElementById("registerPassword");
let password2 = document.getElementById("registerPassword2");
let registerButton = document.getElementById("registerButton");


 // verification functions

// function to check if field empty
const isRequired = (value) => (value === "" ? false : true);

// function to verify email
const isEmailValid = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
// function to verify password
const isPasswordSecure = (password) => {
	const re = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	);

	return re.test(password);
};
// function to check if age is above 16
const isOfAge = (dob) => {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let dobDate = new Date(dob);
	let bdYear = dobDate.getFullYear();

	let age = currentYear - bdYear;

	return age > 16;
};

// function to verify if name is text
const isText = (inputName) => {
	const re = new RegExp("^[A-Za-z]*");
	return re.test(inputName);
};
// function to verify phone number
const isNum = (inputName) => {
	const re = new RegExp("\\d{14}");
	return re.test(inputName);
};

// function to show error
const showError = (input, message) => {
	// get the form-field element
	const formField = input.parentElement;
	// add the error class
	formField.classList.remove("success");
	formField.classList.toggle("error");

	// show the error message
	const error = formField.querySelector("small");
	error.textContent = message;
};

// function to show success
const showSuccess = (input) => {
	// get the form-field element
	const formField = input.parentElement;

	// remove the error class
	formField.classList.remove("error");
	formField.classList.toggle("success");

	// hide the error message
	const error = formField.querySelector("small");
	error.textContent = "";
};

// function to check if name is text
const checkName = () => {
	let valid = false;
	const nameTrimmed = fullname.value.trim();

	if (!isRequired(nameTrimmed)) {
		showError(fullname, "Name cannot be blank.");
	} else if (!isText(nameTrimmed)) {
		showError(fullname, `Name must be only text.`);
	} else {
		showSuccess(fullname);
		valid = true;
	}
	return valid;
};
// function to validate phone
const checkPhone = () => {
	let valid = false;
	const phoneTrimmed = phone.value.trim();
	if (!isRequired(phoneTrimmed)) {
		showError(phone, "Phone cannot be blank.");
	} else if (!isNum(phoneTrimmed)) {
		showError(phone, "Phone must be only numbers and 14 digits.");
	} else {
		showSuccess(phone);
		valid = true;
	}
	return valid;
};

// function to check date
const checkDob = () => {
	let valid = false;
	const dobVal = dob.value;
	if (!isRequired(dobVal)) {
		showError(dob, "Date of birth cannot be blank.");
	} else if (!isOfAge(dobVal)) {
		showError(dob, "You should be over the age of 16.");
	} else {
		showSuccess(dob);
		valid = true;
	}
	return valid;
};

// function to validate email
const checkEmail = () => {
	let valid = false;
	const emailTrimmed = email.value.trim();
	if (!isRequired(emailTrimmed)) {
		showError(email, "Email cannot be blank.");
	} else if (!isEmailValid(emailTrimmed)) {
		showError(email, "Email is not valid.");
	} else {
		showSuccess(email);
		valid = true;
	}
	return valid;
};

// function to validate password
const checkPassword = () => {
	let valid = false;

	const passwordTrimmed = password.value.trim();

	if (!isRequired(passwordTrimmed)) {
		showError(password, "Password cannot be blank.");
	} else if (!isPasswordSecure(passwordTrimmed)) {
		showError(
			password,
			"Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
		);
	} else {
		showSuccess(password);
		valid = true;
	}

	return valid;
};

// function to confirm password
const checkConfirmPassword = () => {
	let valid = false;
	// check confirm password
	const confirmPassword = password2.value.trim();
	const passwordTrimmed = password.value.trim();

	if (!isRequired(confirmPassword)) {
		showError(password2, "Please enter the password again");
	} else if (passwordTrimmed !== confirmPassword) {
		showError(password2, "Confirm password does not match");
	} else {
		showSuccess(password2);
		valid = true;
	}

	return valid;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
    checkName(fullname)&&
    checkPhone() &&
    checkDob() &&
    checkEmail() &&
    checkPassword() &&
    checkConfirmPassword()
    ) {
        fetch("http://localhost/phpjs/includes/signup.inc.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              },
              body: `fullname=${fullname.value.trim()}&email=${email.value.trim()}&phone=${phone.value.trim()}&dob=${dob.value.trim()}&password=${password.value.trim()}`
        })
        .then((response) => response.text())
        .then((res) => (console.log(res)));
    }
    
    
});
