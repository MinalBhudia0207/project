function validateLogin(form){
    login(form);
    password(form);
}

function login(form){
    var emailAddress=form.elements["email"];
    var correctemail="admin@admin.com";
    if(emailAddress.validity.valueMissing){
        emailAddress.setCustomValidity("Please enter your email address. It can not be blank");
    }
    else if(emailAddress.validity.typeMismatch){
        emailAddress.setCustomValidity("Please the email address in the correct format");
    }
    else if(!(email.value==correctemail)){
        emailAddress.setCustomValidity("Incorrect email");
    }
    else{
        emailAddress.setCustomValidity("");
    }
}

function password(form){
    var passwordlogin=form.elements["password"];
    var correctpassword="admin";
    if(passwordlogin.validity.valueMissing){
        passwordlogin.setCustomValidity("Enter the password");
    }
    else if(!(passwordlogin.value==correctpassword)){
        passwordlogin.setCustomValidity("Incorrect password");
    }
    else{
        passwordlogin.setCustomValidity("");
    }
}
