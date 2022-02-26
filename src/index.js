$(document).ready(function(){
    display();
});

function display(){
    var tab = '';
    tab += '<h1>Register New Account</h1>'
    tab += '<input type= "text" id="name" placeholder ="  Name">'
    tab += '<input type= "text" id="lname" placeholder =" Last Name">'
    tab += '<input type= "text" id="fname" placeholder ="  Name">'
    tab += '<input type= "text" id="city" placeholder ="  City">'
    tab += '<input type= "text" id="phone" placeholder ="  Phone Number">'
    tab += '<input type= "text" id="email" placeholder ="  Email">'
    tab += '<button type= "sumbit">Create Account</button> '



    document.getElementById("display").innerHTML= tab;

    
}