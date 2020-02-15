
function sayHello() {
   window.alert("Hello 2-ITG...");
  /*let name = prompt("Enter your name: ");
   document.write("<h1>Welcome 2ITG</h1>");*/

}

//innerHTML (nasa loob ng tag)
function changeParagraph() {
    document.getElementById("para1").innerHTML = "This is the new paragraph.";
}

//1 type
function add(num1, num2) {
    console.log(num1 + num2);
}

//2 type
let add1 = function(x,y) {
    console.log(x+y);
}

//3 type
let add2 = (a,b) => console.log(a+b);

sayHello();

//Global (out funct) vs Local (inside the funct)

let x = 5;

function temp (){
 let x = 6; //diff since diff output sa memory; didisplay lang to di na need ng button
}

console.log(x);

function comparePassword() {
    let pass1 = document.getElementById("pw1").value;
    let pass2 = document.getElementById("pw2").value;

    if(pass1==pass2) {
        alert("form entries were sent to server");
    }
    else{
        alert("password is incorrect");
    }
}