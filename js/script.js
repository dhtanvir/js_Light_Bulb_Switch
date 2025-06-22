

const lights = document.querySelector("#myImage");

const button = document.querySelector(".lightOn");
const button1 = document.querySelector(".lightOff");


const lightOn = false;

button.addEventListener("click", function () {

    if (lightOn) {

        lights.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
        console.log(lightOn);

    } else {

        lights.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
        console.log(lightOff);
    }

})
const lightOff = true;

button1.addEventListener("click", function () {

    if (lightOff) {

        lights.setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
        console.log(lightOn);

    } else {

        lights.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
        console.log(lightOff);
    }

})

// =======================================


// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
// 	e.preventDefault();

// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = password.value.trim();
// 	const password2Value = password2.value.trim();

// 	if(usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}

// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}

// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}

// 	if(password2Value === '') {
// 		setErrorFor(password2, 'Password2 cannot be blank');
// 	} else if(passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(password2);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


// =============================



document.querySelector(".formSubmit").addEventListener("click", (e) => {

    e.preventDefault();

    const form = document.querySelector('#form');
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const password2 = document.querySelector('#password2').value;
    const message1 = document.querySelector("#demo1");
    const message2 = document.querySelector("#demo2");
    const message3 = document.querySelector("#demo3");
    const message4 = document.querySelector("#demo4");

    if (username === '') {
        // setErrorFor(username, 'Username cannot be blank');
        message1.innerHTML = 'Username is not a Valid!'
    } else {
        message1.innerHTML = 'Username is  Valid!'
    }

    if (email === '') {
        message2.innerHTML = 'email is not a Valid!'
    } else {
        message2.innerHTML = 'email is  Valid!'
    }

    if (password === '') {
        message3.innerHTML = 'Password cannot be blank!'
    } else {
        message3.innerHTML = 'password is  Valid!'
    }

    if (password2 === '') {
        message4.innerHTML = 'Password cannot be blank!'
    } else if (password !== password2) {

        message4.innerHTML = 'Password does not match!'
    } else {
        message4.innerHTML = 'Password is  match!'
    }



})







