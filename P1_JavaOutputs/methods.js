//Remember that in javascript variables are not 

//Use 5 different methods in JavaScript window.alert() | window.prompt | document.write | innerHTML = document.getElementBy..| console.log

/* window.alert('Patricia Anne M. Valenzuela');
    
    window.prompt('A prompt is an alert with text field');
    console.log('Mama mo');
    document.write('Plain method to write something in a document');
    document.write('<h1>Hello</h1>');
*/

// Display functions using different methods in JavaScript

function add(){
    let a = 5, b = 6;
    let sum = a + b;
    //window.alert("The sum is:" + sum); window.prompt("The sum is: " + sum);
    document.write("The sum is: " + sum + "<br></br>");
}
    add(); 

// II. Get the average of 3 numbers
function average(a,b,c) {
    let average = (a + b + c) / 3
    document.write("The average is: " + average + "<br>");
}
    average(10,20,30);

//III. Counting Numbers
function count() {
    for(var a = 0; a < 3 ; a++){
       document.write(a); //012
                          //return a; 0
    }
}
   count();
