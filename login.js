const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-valid");
const passwordMsg = document.querySelector(".password-valid");
const signStatus = document.querySelector(".sign-in-successed");
const signButton = document.querySelector(".login-button");
const userDiv = document.querySelector(".username");
const passDiv = document.querySelector(".password");


usernameInput.addEventListener("keyup", ussername_check);
passwordInput.addEventListener("keyup", password_check);
signButton.addEventListener("click", signIN);
let userCheck = true;
let passCheck = true;


function signIN(e){
    e.preventDefault();
    const userValue = usernameInput.value;
    const passValue = passwordInput.value;

    if(passCheck && userCheck){
        const body = JSON.stringify({
            username: userValue,
            password: passValue,
        });
        const headers = {
            'Content-type': 'application/json'
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: body,
            headers: headers
        })
            .then((response) => {
                if (response.ok)
                    signStatus.innerHTML = 'You signed in successfully';
                    signStatus.style.visibility = 'visible';
            })
    }
}
function ussername_check(){
    var validEmailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; ;
    const userValue = usernameInput.value;
    if(!userValue.match(validEmailRegex)){
        userDiv.style.cssText += "border-bottom: solid 2px #ee2a00;";
        usernameMsg.style.visibility = 'visible';
        usernameMsg.innerHTML = "Please enter a valid email";
        userCheck = false;
    }
    else{
        usernameMsg.style.visibility = 'hidden';
        userDiv.style.cssText += "border-bottom: solid 2px rgb(0 235 84);";
        userCheck = true;
    }

}
function password_check(){
    var validPassRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const passValue = passwordInput.value;
    if(!passValue.match(validPassRegex)){
        passDiv.style.cssText += "border-bottom: solid 2px #ee2a00;";
        passwordMsg.style.visibility = 'visible';
        passwordMsg.innerHTML = "Your password isn't good enough";
        passCheck = false;

    }
    else{
        passwordMsg.style.visibility = 'hidden';
        passDiv.style.cssText += "border-bottom: solid 2px rgb(0 235 84);";
        passCheck = true;
    }
}


