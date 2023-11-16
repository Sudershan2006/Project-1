const butE1=document.getElementById("sub");

function hasString1(str1){
    s=str1.length-10;
    if(str1.substring(s)=="@gmail.com"){
        return true;
    }
    else{
        return false;
    }
}

butE1.addEventListener("click",()=>{
    const nameE1=document.getElementById("name").value;
    const emailE1=document.getElementById("email").value;
    const passE1=document.getElementById("pass").value;
    const repassE1=document.getElementById("repass").value;
    if((nameE1!="")&&(emailE1!="")&&(passE1!="")&&(repassE1!="")){
        if(hasString1(emailE1) == false){
            document.getElementById("msg").innerHTML="Provide valid email";
        }
        else if(passE1 == repassE1){
            document.getElementById("msg").innerHTML="true";
        }
        else{
            document.getElementById("msg").innerHTML="false";
        }
    }
    else{
        document.getElementById("msg").innerHTML="Provide valid credentials";
    }
});

