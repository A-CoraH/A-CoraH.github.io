$("#form_id").submit(function(e) {
    e.preventDefault();

    var x = document.createElement('IMG');
    var t = document.getElementById('link_input').value;
    x.src = t;
   var containerDiv = document.getElementById('container').appendChild(x);
  
});
