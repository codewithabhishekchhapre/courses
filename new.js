function formValidation(){

    var firstname=document.getElementById("firstName");
    firstname=firstname.innerText;
    var age=document.getElementById("age");
    age=age.innerText;

    if(firstname==' ')
    {
        document.getElementById("demo").innerHTML="first name has to be entered";
    }
     if(age== ' ')
    {
        document.getElementById("demo").innerHTML="age has to be entered";

    }

    else if(parseInt(age)<=18)
    {
        document.getElementById("demo").innerHTML="age should be greater than 18";
    }
    else

}