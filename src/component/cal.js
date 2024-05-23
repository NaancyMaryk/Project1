
function amtVal()
{
    var numbers = /^[0-9]+$/;
    var x1=document.getElementById("loanamount");
    if(!x1.value.match(numbers))
    {
        document.getElementById("error1").innerHTML="* Ensure that you fill in valid Loan Amount";
        document.getElementById("error1").style.color="red";
        return false;

    }
    else
    {
        document.getElementById("error1").innerHTML="";
        return true;
    }
}
function interestVal()
{
    var numbers = /^[0-9]+$/;
    var x2=document.getElementById("interestrate");
    if(!x2.value.match(numbers))
    {
        document.getElementById("error2").innerHTML="* Ensure that you fill in valid Interest Rate ";
        document.getElementById("error2").style.color="red";
        return false; 
    }
    else{
        document.getElementById("error2").innerHTML="";
        return true;
    }
}

    function termVal()
    {
        var numbers = /^[0-9]+$/;
        var x3=document.getElementById("loanterm");
        if(!x3.value.match(numbers))
    {
        document.getElementById("error3").innerHTML="* Ensure that you fill in valid Loan Term";
        document.getElementById("error3").style.color="red";
        return false; 
    }
    else
    {
        document.getElementById("error3").innerHTML="";
        return true;
    }

    }
    

function estimate()
{
    var e1=document.getElementById("loanamount");
    var e2=document.getElementById("interestrate");
    var e3=document.getElementById("loanterm");
    if(e1.value==="")
    {
        document.getElementById("error1").innerHTML="* Ensure that you fill in the Loan Amount";
        document.getElementById("error1").style.color="red";
        return false;
    }
    if(e2.value==="")
    {
        document.getElementById("error2").innerHTML="* Ensure that you fill in valid Interest Rate ";
        document.getElementById("error2").style.color="red";
        return false; 
    }
    if(e3.value==="")
    {
        document.getElementById("error3").innerHTML="* Ensure that you fill in valid Loan Term";
        document.getElementById("error3").style.color="red";
        return false; 
    }
    document.getElementById("error1").innerHTML="";
    document.getElementById("error2").innerHTML="";
    document.getElementById("error3").innerHTML="";


    var a=Number(document.frm1.loanamt.value);
    var b=Number(document.frm1.insrate.value);
    var c=Number(document.frm1.years.value);
    const format = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    let a1=(b/100)/12;
    let months=c*12;
    let monthlypayment=(a*a1)/(1-Math.pow(1+a1,-months));
    document.frm1.payment.value=format.format(monthlypayment);
}
