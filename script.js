const passBox = document.querySelector("#password");
const passBox2 = document.querySelector("#password-again");

const submitButton = document.querySelector("button");

function checkPassword(){
    if (passBox.value != passBox2.value){
        submitButton.setAttribute("disabled","disabled");
    }
    else{
        submitButton.removeAttribute("disabled");
    }
}

passBox.addEventListener("input",checkPassword);
passBox2.addEventListener("input",checkPassword)
