$("#form_id").submit(function (e) { /*Sumbiting the form. When the form with id "form id" is submitting its runs the function. Whatever is inside the curly brackets runs*/
    e.preventDefault();


	
	var jack = document.getElementById('name'); /*Asking HTML to get the element from id "name"*/
	var jill = document.getElementById("andrew"); 
	jill.innerHTML= jack.value;
	
	var venus = document.getElementById("bio");
	var mars = document.getElementById("a");
	mars.innerHTML=venus.value;
	
    var honda = document.getElementById("photo"); // Gets the value from the id "photo"
    var ford = document.getElementById("b"); //Original photo
    ford.src = honda;
    ford.innerHTML= honda.value;	





	// var mary = document.getElementById('photo'); /*Asking HTML to get the element from id "photo"*/
	// var bob = document.getElementById('bio')
	
	});
