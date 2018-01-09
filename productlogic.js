function checkProdPage(){
	var pid=document.getElementById("pid").value;
	var pname=document.getElementById("pname").value;
	var pprice=document.getElementById("pprice").value;
	var pquan=document.getElementById("pquan").value;	
	
	var w=window.open("","_self")
	w.document.writeln("<html><head><title>Product Display Page</title></head><body>");
	w.document.writeln("The Product id="+pid+"<br>");
	w.document.writeln("The product name="+pname+"<br>");
	w.document.writeln("The product price="+pprice+"<br>");
	w.document.writeln("The quantity of products="+pquan+"<br>");
	w.document.writeln("</body></html>");
		
	
}