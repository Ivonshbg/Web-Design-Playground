const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
loginForm.addEventListener("submit", function(e){
    errorMsg.textContent = "";
    if(username.value.trim()==="" || password.value.trim()===""){
        e.preventDefault();
        errorMsg.textContent = "Please fill in both username and password.";
    }

});

