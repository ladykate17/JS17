$(document).on('ready', function() {

var plate = function(name, price, description){
	this.name  		 = name;
	this.price 		 = price;
	this.description = description;
} 

var enchiladas  = new plate('Enchiladas', 5.00, 'cheesy deliciousness'); 
var tacos       = new plate('Tacos Carnitas', 6.00, 'steak grilled with pico de gallo');
var fajitas     = new plate('Fajitas', 7.00, 'grilled meat with peppers');

$('.Menu').append('<div class="plate"><img src="http://assets.kraftfoods.com/recipe_images/Creamy-Chicken-Enchiladas-1901.jpg"><h2>'+ enchiladas.name +' </h2> '+ ' $' + enchiladas.price + '<p class="description">' + enchiladas.description +' </p><button>ORDER NOW!</button></div>')
$('.Menu').append('<div class="plate"><img src="http://assets.kraftfoods.com/recipe_images/Grilled-Pastor-Style-Tacos-53260.jpg"><h2>'+ tacos.name +' </h2> '+ ' $' + tacos.price + '<p class="description">' + tacos.description +' </p><button>ORDER NOW!</button></div>')
$('.Menu').append('<div class="plate"><img src="http://assets.kraftfoods.com/recipe_images/opendeploy/58256_MXM_%20K58256V0_OR1_CR_640x428.jpg" height="203" width="306"><h2>'+ fajitas.name +' </h2> '+ ' $' + fajitas.price + '<p class="description">' + fajitas.description +' </p><button>ORDER NOW!</button></div>')

$('button').on('click', function(){
	confirm('ARE YOU SURE?????????') 
	return 


})

});