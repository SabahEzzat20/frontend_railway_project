function message(){
    var paymentmethod = document.getElementById('paymentmethod');
    const fawryMsg = document.getElementById('fawryMsg');
    const next = document.getElementById('next');
    if(paymentmethod.value==='fawry' || paymentmethod.value==='Fawry' )
    {
        fawryMsg.style.display='block';
    }
    else 
    if(paymentmethod.value==='credit card')
    {
        next.style.display='inline-block';
    }
}