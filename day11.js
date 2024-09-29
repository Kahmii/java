let myform = document.getElementById("form");
// let submit = document.getElementById("submit");
let texterror = document.getElementById("texterror");
let passworderror = document.getElementById("passworderror");

myform.addEventListener("submit", (event) => {
    event.preventDefault();

    let ifvalid = true;
    let text = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    let textpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/; 

    
    texterror.textContent = "";
    passworderror.textContent = "";

   
    if (!text.match(textpattern)) {
        texterror.textContent = "This is not a valid email address.";
        ifvalid = false;
    }

    if (!password.match(passwordpattern)) {
        passworderror.textContent = "Password must contain lowercase, uppercase, symbols, and numbers.";
        ifvalid = false;
    }

    if (ifvalid) {
        alert("Form submitted successfully");
         myform.submit();
    }
});
