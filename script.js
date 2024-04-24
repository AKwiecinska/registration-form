const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');
const eyeIcon = document.getElementById('eye-icon');

const showPassword = () => {
	if (password.type === 'password') {
		password.type = 'text';
		eyeIcon.src = 'img/eye.png';
	} else if (password.type === 'text') {
		password.type = 'password';
		eyeIcon.src = 'img/hidden.png';
	}
};

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};
const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.getAttribute('class')} must be at least ${min} characters`
		);
	}
};

const checkEmail = (email) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'email is incorrect');
	}
};

const checkError = () => {
	const allInputs = document.querySelectorAll('.form-box');
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		popup.classList.add('show-popup');
	}
	console.log(errorCount);
};
eyeIcon.addEventListener('click', function () {
	showPassword();
});

sendBtn.addEventListener('click', function (e) {
	e.preventDefault();
	checkForm([username, password, email]);
	checkLength(username, 3);
	checkLength(password, 8);
	checkEmail(email);
	checkError();
});
clearBtn.addEventListener('click', function (e) {
	e.preventDefault();

	[username, password, email].forEach((el) => {
		el.value = '';
		clearError(el);
	});
});
