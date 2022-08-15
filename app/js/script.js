const inputEmail = document.querySelectorAll("input[type=email]");
//console.log(inputEmail);
const inputButton = document.querySelectorAll("input[type=button]");
const errorText = document.querySelectorAll('.text-error');
const emailFormat = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])";
let error = [];

for(let i = 0; i < inputButton.length; i++) {
    inputButton[i].addEventListener("click", () => {
        error = [];
        const email = inputEmail[i].value;

        if(email == "" || email === undefined) {
            error.push("Please check your email")
            inputEmail[i].style.border = "1px solid red";
            errorText[i].innerHTML = error[0];
            errorText[i].style.color = "red";
        } else if(!email.match(emailFormat)) {
            error.push("Please check your email");
            inputEmail[i].style.border = "1px solid red";
            errorText[i].innerHTML = error[0];
            errorText[i].style.color = "red";
        } else {
            error.push("Thank you!");
            inputEmail[i].style.border = "1px solid blue";
            errorText[i].innerHTML = error[0];
            errorText[i].style.color = "blue";

        }
    });
}

