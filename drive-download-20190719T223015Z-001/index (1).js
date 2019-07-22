$("#form_id").submit(function (e) { /*Sumbiting the form. When the form with id "form id" is submitting its runs the function. Whatever is inside the curly brackets runs*/
    e.preventDefault();

    var x = document.createElement('img');
    x.className = "bye";
    x.src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Multiply_album_logo.png";
    var toy = document.createElement("div"); /*Creating an new div element and storing it in a varaible. This groups the image and caption together*/
    toy.classList.add("toy");
    toy.appendChild(x);
    x.style.width = "30px";
    x.style.height = "30px";
    
    
    
    var url = document.getElementById('input');  /* Asking HTML to get the element from id "input"*/
    var img = document.createElement('img'); /*Once we have that element, we have to store that data in a variable */
    img.src = url.value; /*Setting the value of the src (image source) to the link input*/
    
   /* var containerDiv = document.getElementById("container");*/
        toy.appendChild(img)/*Linking the data from whitebox in HTML to the image source. This is what brings the image on the screen*/
         console.log("form submitted!")
    var sams = document.getElementById("link"); /* Asking HTML to give me the element that has the id "link"*/
    var sleepy = sams.value; /* Storing input.value into a variable to get the vaue the user typed*/
    addNewItem(toy,sleepy); /* Putting caption in the box*/
    sams.value = ""; /* To reset the input*/
}); 

function addNewItem(toy,sleepy){ /*This function create the caption*/
   var sleepy_elem = document.createElement("p"); /* Creating a new p element and storing it in a variable*/
    sleepy_elem.innerHTML = sleepy /*This is inside the new element p we created in the previous line*/
    toy.appendChild(sleepy_elem); /* We are appending the div (which groups the picture with a caption) with the p element (the text value)*/
    document.getElementById("container").appendChild(toy); /*Appending the container in the HTML to the div we created in Javascript*/
   

toy.addEventListener("click", function(){ /* Removing the post*/
     var toy_id = String(Math.random()) /* Using random number so our IDs can be unique. If they were not unique then everytime we delete one, we delete all*/
   toy.id =toy_id;
    document.getElementById(toy_id).remove() 
    });
}

/*
make an containrer dsotre image, img.src= link of x picture, set width and height and append to image and caption



*/