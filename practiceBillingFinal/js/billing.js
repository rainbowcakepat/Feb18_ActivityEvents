function billingFunction() {

    let billingName = document.getElementById("billingName");
    let billingZip = document.getElementById("billingZip");
    let check = document.getElementById("same");
    
//shippingName != null && shippingZip != null
    if(check.checked == true) {
        billingName.value =  document.getElementById("shippingName").value;
        billingZip.value = document.getElementById("shippingZip").value;
    }

    else {
        billingName.value = " ";
        billingZip.value = " ";
    }
 
    /*
    if(shippingName != null && shippingZip != null && check.checked == true))
    billingName.value =  shippingName;
    billingZip.value = shippingZip;
    }

    else if(shippingName != null && shippingZip != null  {
    billingName.value = null;
    billingZip.value = null;
    }
    */


    
}
