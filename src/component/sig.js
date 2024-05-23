function validat()    
    {
	var a=document.getElementById("usname");
	if(a.checkValidity()===false)
	{
		document.getElementById("error1").innerHTML="Ensure that the name is correct";
		document.getElementById("error1").style.color="red";
		
		return false;
		
	}
	else
	{
		document.getElementById("error1").innerHTML="";
		document.getElementById("error1").innerHTML="";
                 

		return true;
	}
        }
        function validatePassword() {
            var e = document.getElementById("pass");
           if (e.checkValidity()===false) {
          

           document.getElementById("error2").innerHTML="* Password must be between 5 to 12 characters";
           document.getElementById("error2").style.color="red";

           return false;
}     else {
 document.getElementById("error2").innerHTML = "";
       

       return true;
}
        }
        function validateConfirm() {
            var pass1 = document.getElementById("pass").value;
            var pass2 = document.getElementById("conpass").value;
            if (pass1 !== pass2) {
              
          
                  document.getElementById("error3").innerHTML = "* Passwords should match";
                          document.getElementById("error3").style.color = "red";
          
              return false;
            } else {
                document.getElementById("error3").innerHTML = "";
                      
          
              return true;
            }
          }
          function emVal()
	{
		var d=document.getElementById("email");
	if(d.checkValidity()===false)
	{
		document.getElementById("error4").innerHTML="* Ensure that you enter correct email according to the pattern";
		document.getElementById("error4").style.color="red";
		

		return false;
	}
	else
	{
		document.getElementById("error4").innerHTML="";
		

		return true;
	}
	}

    function frmVal()
	{
	var h=document.getElementById("usname");
	var j=document.getElementById("pass");
	var k=document.getElementById("conpass");
	var l=document.getElementById("email");
	if(h.value==="")
	{
		
		document.getElementById("error1").innerHTML="* Ensure that you fill in the name";
		document.getElementById("error1").style.color="red";
		
		return false;
		
		
	}
	if(j.value==="")
	{
		document.getElementById("error2").innerHTML="* Ensure that you fill in the password";
		document.getElementById("error2").style.color="red";
		
		return false;
	
	}
	if(k.value==="")
	{
		
		document.getElementById("error3").innerHTML="* Ensure that you create a password";
		document.getElementById("error3").style.color="red";
		
	return false;	
	}
	if(l.value==="")
	{
		
		document.getElementById("error4").innerHTML="* Ensure that you enter correct email according to the pattern ";
		document.getElementById("error4").style.color="red";
		 return false;
		
	}
	
	
	
		document.getElementById("error1").innerHTML=" ";
		document.getElementById("error2").innerHTML=" ";
		document.getElementById("error3").innerHTML=" ";
		document.getElementById("error4").innerHTML=" ";
	 return true;
	
	}