function fnameCheck(){
    var regUsername = /^[a-zA-Z0-9\s]{2,15}$/;
    var fnameValue = document.getElementById("fname").value;

    if (regUsername.test(fnameValue)){
        document.getElementById('fnameNote').innerHTML = " Valid input";
        document.getElementById('fnameNote').style.color = "green";
    }
    else{
        document.getElementById("fnameNote").innerHTML = " Invalid number or type of characters! Please try again.";
        document.getElementById('fnameNote').style.color = "red";
    }
}

function lnameCheck(){
    var regUsername = /^[a-zA-Z0-9\s]{2,15}$/;
    var lnameValue = document.getElementById("lname").value;

    if (regUsername.test(lnameValue)){
        document.getElementById('lnameNote').innerHTML = " Valid input";
        document.getElementById('lnameNote').style.color = "green";
    }
    else{
        document.getElementById("lnameNote").innerHTML = " Invalid number or type of characters! Please try again.";
        document.getElementById('lnameNote').style.color = "red";
    }
}

function emailCheck(){
    var regEmail = /\S+@\S+\.\S+/;
    var emailValue1 = document.getElementById("email1").value;

    if(regEmail.test(emailValue1)){
        document.getElementById("emailNote").innerHTML = " Valid email address";
        document.getElementById('emailNote').style.color = "green";
    }
    else{
        alert("Please check your email. Something got wrong!");
    }
}

function emailConfirm(){
    var emailValue1 = document.getElementById("email1").value;
    var emailValue2 = document.getElementById("email2").value;
    
    if (emailValue2 !== emailValue1){
        alert("Please check your email. Both must be the same!");     
    }
    else{
        document.getElementById("confirmationNote").innerHTML = " EMAIL CONFIRMED";
        document.getElementById('confirmationNote').style.color = "green";
    }
}

function genderSelect(){
    var option = document.getElementsByName('gender');
    if (!(option[0].checked || option[1].checked || option[2].checked)){
        alert("Please Select Your Gender");
    }
    else{
        return false;
    }
}

function check_phone(){
    var phoneNum = document.getElementById("phone").value;
    var lenNum = phoneNum.toString().length
        
    if (phoneNum === ""){
        alert("Please enter your phone number");
    }

    else if (isNaN(phoneNum) || lenNum <8 || lenNum > 13){
        document.getElementById("numNote").innerHTML = " Something got wrong. Please enter your phone number";
        document.getElementById("numNote").style.color = "red";
    } 
    else {
        document.getElementById("numNote").innerHTML = " Valid number"
        document.getElementById('numNote').style.color = "green";
    }
}
    
function addressCheck(){
    if(document.getElementById('myAddress').value === ''){      
        alert("Please Provide Details!");
              document.getElementById('myAddress').focus();
        return false;       
    }
    else if(document.getElementById('name').value == ''){      
        alert("Please Provide Name!");
            document.getElementById('name').focus();
        return false;       
    }
    else
        return true;
}


// Validation for textareas
function checkArea(){
    if(document.getElementById('explanation').value === ''){      
        alert("Please Provide Details!");
              document.getElementById('explanation').focus();
        return false;       
    }
    else if(document.getElementById('name').value == ''){      
        alert("Please Provide Name!");
            document.getElementById('name').focus();
        return false;       
    }
    else
        return true;
}


        






