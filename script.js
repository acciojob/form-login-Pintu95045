function getFormvalue() {
    //Write your code here
	const fname=document.forms["form1"]["fname"].value;	
	const lname=document.querySelector('[name="lname"]').value;
	alert(fname+' '+lname);
}