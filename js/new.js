var url = new URL(window.location.href);
hold = url.searchParams.get('mode');
if (hold !== 'login' && hold !== 'register') {
    console.log('No proper authentication mode, using login.');
    hold = 'login';
}
if (hold == 'login') {
    document.getElementById('cssFile').setAttribute("href", "../assets/login.css");    
} else {
    document.getElementById('cssFile').setAttribute("href", "../assets/register.css");
}
var myNode;
var firstP;
var secondP;
var div1;
var div2;
var div3;
var div4;
var div5;
var div6;
var a1;
var input1;
var input2;
var input3;
var input4;
var input5;
var input6;
var i1;
var i2;
var i3;
var i4;
var i5;

function instantiateElements() {
    firstP = document.createElement('p');
    secondP = document.createElement('p');
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div3 = document.createElement('div');
    div4 = document.createElement('div');
    div5 = document.createElement('div');
    div6 = document.createElement('div');
    a1 = document.createElement('a');
    input1 = document.createElement('input');
    input2 = document.createElement('input');
    input3 = document.createElement('input');
    input4 = document.createElement('input');
    input5 = document.createElement('input');
    input6 = document.createElement('input');
    i1 = document.createElement('i');
    i2 = document.createElement('i');
    i3 = document.createElement('i');
    i4 = document.createElement('i');
    i5 = document.createElement('i');
}
function eraseElements(){
    myNode.innerHTML = '';
}
function makeLoginPage(){
    firstP.innerHTML = 'ورود';
    secondP.innerHTML = 'ایمیل و یا شماره تلفن خود را وارد کنید';

    div1.setAttribute("class", "input-container");
    input1.setAttribute("class", "box");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "username");
    input1.setAttribute("placeholder", "ایمیل یا شماره همراه");
    i1.setAttribute("class", "far fa-user");

    div1.appendChild(input1);
    div1.appendChild(i1);

    div2.setAttribute("class", "input-container");
    input2.setAttribute("class", "box");
    input2.setAttribute("type", "password");
    input2.setAttribute("name", "pass");
    input2.setAttribute("placeholder", "رمز ورود");
    i2.setAttribute("class", "fas fa-key");

    div2.appendChild(input2);
    div2.appendChild(i2);

    a1.innerHTML = 'رمز عبور خود را فراموش کردم';
    
    input3.setAttribute("id", "button");
    input3.setAttribute("type", "button");
    input3.setAttribute("value", "ورود");

    appendElements_l();
}
function makeRegisterPage(){
    firstP.innerHTML = 'ثبت نام';
    secondP.innerHTML = 'از اینکه داری به جمع ریحونیا می پیوندی خیلی خوشحالیم';
    div1.setAttribute("id", "container");

    //first div
    div2.setAttribute("class", "row");
    input1.setAttribute("class", "box");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "username");
    input1.setAttribute("placeholder", "نام و نام خانوادگی");
    i1.setAttribute("class", "far fa-user icon");

    div2.appendChild(input1);
    div2.appendChild(i1);
    div1.appendChild(div2);

    //second div
    input2.setAttribute("class", "box");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "username");
    input2.setAttribute("placeholder", "شماره همراه");
    i2.setAttribute("class", "fas fa-phone");
    div3.appendChild(input2);
    div3.appendChild(i2);
    div1.appendChild(div3);

    //third div
    input3.setAttribute("class", "box");
    input3.setAttribute("type", "text");
    input3.setAttribute("name", "username");
    input3.setAttribute("placeholder", "ایمیل");
    i3.setAttribute("class", "fas fa-envelope icon");
    div4.appendChild(input3);
    div4.appendChild(i3);
    div1.appendChild(div4);

    //forth div
    
    div5.setAttribute("class", "row");
    input4.setAttribute("class", "box");
    input4.setAttribute("type", "text");
    input4.setAttribute("name", "username");
    input4.setAttribute("placeholder", "رمز عبور");
    i4.setAttribute("class", "fas fa-key");
    
    div5.appendChild(input4);
    div5.appendChild(i4);
    div1.appendChild(div5);

    //fifth div
    div6.setAttribute("class", "row");
    input5.setAttribute("class", "box");
    input5.setAttribute("type", "text");
    input5.setAttribute("name", "username");
    input5.setAttribute("placeholder", "تکرار رمز عبور");
    i5.setAttribute("class", "fas fa-key");
    
    div6.appendChild(input5);
    div6.appendChild(i5);
    div1.appendChild(div6);

    input6.setAttribute("id", "button");
    input6.setAttribute("type", "button");
    input6.setAttribute("value", "ثبت نام");
    appendElements_r();
}
function appendElements_l(){
    myNode.appendChild(firstP);
    myNode.appendChild(secondP);
    myNode.appendChild(div1);
    myNode.appendChild(div2);
    myNode.appendChild(a1);
    myNode.appendChild(input3);
}
function appendElements_r(){
    myNode.appendChild(firstP);
    myNode.appendChild(secondP);
    myNode.appendChild(div1);
    myNode.appendChild(input6);
}

$(document).ready(function() {
    myNode = document.getElementById("lr_part2");

    eraseElements();
    instantiateElements();

    if (hold == 'login') {
        makeLoginPage();
    }
    else {
        makeRegisterPage();
    }
    document.getElementById('lr').addEventListener("keyup", tabpressed);
    document.getElementById('first').addEventListener("click", clicked);
    document.getElementById('second').addEventListener("click", clicked);
}); 
function tabpressed(e){
    var keyCode = e.keyCode;
    if (keyCode == 9) {
        changePage();  
    }
}
function clicked(){
    changePage();
}
function changePage(){
    eraseElements();
    instantiateElements();
    if (hold == 'login') {
        hold = 'register';
        document.getElementById('cssFile').setAttribute("href", "../assets/register.css"); 
        makeRegisterPage();
    }
    else {
        hold = 'login';
        document.getElementById('cssFile').setAttribute("href", "../assets/login.css");
        makeLoginPage();
    }
}