function validate() {

    var eventType = document.getElementById("eventType").value;
    var eventTitle = document.getElementById("eventTitle").value;
    var date1 = document.getElementById("date1").value;
    var date2 = document.getElementById("date2").value;
    var date3 = document.getElementById("date3").value;
    
    if(eventType == "" && eventTitle == "" && date1 == "" && date2 == "" && date3 == ""){
        alert("Please fill out all necessary details!");   
    }
    else {
        alert("Form successfully submitted!");
    }
   
}
