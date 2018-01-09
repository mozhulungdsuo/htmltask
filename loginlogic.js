

function checkUserCred()
{
	var userid=document.getElementById("uid").value;
	var password=document.getElementById("psswd").value;
	if(userid=="abc" && password=="abc")
		{
		window.open("productdetails.html","_self");
		}
	else 
		alert("Incorrect password");
	
	
}