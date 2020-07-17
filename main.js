var blue = document.getElementById('blue');
var pruple = document.getElementById('purple');
var black = document.getElementById('black');
var red = document.getElementById('red');
var pink = document.getElementById('pink');
var image = document.getElementById('image');

    pink.addEventListener('click',() =>{
        var changeimg =  image.src="./images/pink.png"
    });

    blue.addEventListener('click',() =>{
        var changeimg =  image.src="./images/blue.png"
    });

    red.addEventListener('click',() =>{
        var changeimg =  image.src="./images/red.png"
    });

    purple.addEventListener('click',() =>{
        var changeimg =  image.src="./images/purple.png"
    });

    black.addEventListener('click',() =>{
        var changeimg =  image.src="./images/black.png"
    });
   
    // var date = new Date()
    // var time = date.getTime();
    // console.log(time)