function customValidation(form){
    validateDate(form);
    validateName(form);
    validateHeight(form);
    validateAge(form);
    validateRole(form);
    validateNickName(form);
    validatePlaceofBirth(form);
    validateSport(form);
    validateTeam(form);
    var str="You added a new player\nName: " +form.elements["fullname"].value+ "\nDate of Birth: " +form.elements["dob"].value+ "\Age: " +form.elements["age"].value+ "\nNickname: "
            +form.elements["nickname"].value+ "\nHeight: " +form.elements["height"].value+ "\nRole: "+form.elements["role"].value+ "\nPlace of Birth: "
            +form.elements["pob"].value+ "\nMarital Status: " +form.elements["maritalstat"].value+ "\nSport played: " +form.elements["sportplayed"].value+ "\nTeam: " +form.elements["team"].value;
    alert(str);
}
function validateName(form){
    var name=form.elements["fullname"];
    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter First and Last name");
    }
    else{
        name.setCustomValidity("");
    }
}
function validateDate(form){
    var date=form.elements["dob"];

    if(date.validity.valueMissing){
        date.setCustomValidity("Please enter Date of Birth");
    }
    else if(date.validity.typeMismatch){
        date.setCustomValidity("Please enter the date in the correct format");
    }
    else{
        date.setCustomValidity("");
    }
}
function validateNickName(form){
    var nicknm=form.elements["nickname"];
    var n=parseInt(nicknm.value);
    if(!(isNaN(nicknm.value))){
        nicknm.setCustomValidity("It can not be a number");
    }
    else if(n){
        nicknm.setCustomValidity("Value can not be with a number");
    }
    else{
        nicknm.setCustomValidity("");
    }
}
function validateHeight(form){
    var height=form.elements["height"];
    var n=parseInt(height.value);
    if(!height.validity.valueMissing){
        if(isNaN(height.value)){
            height.setCustomValidity("Value can not be without a number");
        }
        else if(!n){
            study.setCustomValidity("Value can not be without number");
        }
        else{
            height.setCustomValidity("");
        }
    }
    else{
        height.setCustomValidity("");
    }
}
function validateRole(form){
    var roleplayer=form.elements["role"];
    if(roleplayer.validity.valueMissing){
        roleplayer.setCustomValidity("Please enter role of the player");
    }
    else{
        roleplayer.setCustomValidity("");
    }
}
function validatePlaceofBirth(form){
    var placeofbirth=form.elements["pob"];
    if(placeofbirth.validity.valueMissing){
        placeofbirth.setCustomValidity("Please enter place of Birth");
    }
    else{
        placeofbirth.setCustomValidity("");
    }
}
function validateSport(form){
    var splayed=form.elements["sportplayed"];
    if(splayed.validity.valueMissing){
        splayed.setCustomValidity("Please enter the sport played by the player");
    }
    else{
        splayed.setCustomValidity("");
    }
}
function validateAge(form){
var myAge=form.elements["age"];
    if(myAge.validity.valueMissing){
        myAge.setCustomValidity("Please enter the age");
    }
    else{
        myAge.setCustomValidity("");
    }
}
function validateTeam(form){
    var teamplay=form.elements["team"];
    if(team.validity.valueMissing){
        team.setCustomValidity("Please enter the sport played by the player");
    }
    else{
        team.setCustomValidity("");
    }
}
