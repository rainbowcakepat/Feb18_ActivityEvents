function check() {

}

function submits() {
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let radio = document.getElementsByName("radio").value;
    let abstract = document.getElementById("abstract").value;
    let cbox = document.getElementById("cbox");
  
   if(abstract == "") {
          document.getElementById("abstract").style.backgroundColor = "red";
          return false;
     }
   if(name != "" && email != ""  && radio != "" && cbox.checked == true && abstract != "") {
        alert('Form is submitted');
        return false;
   }

}