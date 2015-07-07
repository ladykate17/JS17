$(document).on('ready', function() {



	// creates each plate
	var plate = function(name, price, description, img, id){
		this.name  		 = name;
		this.price 		 = price;
		this.description = description;
		this.img 		 = img;
		this.id 		 = id;
	} 

	var enchiladas  = new plate('Enchiladas', 5.00, 'cheesy deliciousness', 'http://assets.kraftfoods.com/recipe_images/Creamy-Chicken-Enchiladas-1901.jpg', 1); 
	var tacos       = new plate('Tacos Carnitas', 6.00, 'steak grilled with pico de gallo', 'http://assets.kraftfoods.com/recipe_images/Grilled-Pastor-Style-Tacos-53260.jpg', 2);
	var fajitas     = new plate('Fajitas', 7.00, 'grilled meat with peppers', 'http://assets.kraftfoods.com/recipe_images/opendeploy/58256_MXM_%20K58256V0_OR1_CR_640x428.jpg', 3);
	



	// creates the overall menu
	var Menu = function(plates) {
		this.plates = plates; // ['enchiladas', 'tacos', 'fajitas']
	}
	var overallMenu = new Menu(enchiladas, tacos, fajitas);





	// menu.prototype.create = function() {

	// 	console.log(this.name + ' ' + this.price);
	// 	// var cart = $('<div class="item"></div>');
	// 	// cart.text(this.name + '' + this.price)

	// 	// this.el = cart

	// 	// return this.el
	// }


	$('.container').append('<div class="menu"><h2>Menu</h2>' + Menu.toString() + '</div>');
	// $('.Menu').append('<div class="plate" data-id="2"><img src="' + tacos.img + '"><h2>'+ tacos.name +' </h2> '+ ' $' + tacos.price + '<p class="description">' + tacos.description +' </p><button class="tacos">ORDER NOW!</button></div>')
	// $('.Menu').append('<div class="plate" data-id="3"><img src="' + fajitas.img + '"><h2>'+ fajitas.name +' </h2> '+ ' $' + fajitas.price + '<p class="description">' + fajitas.description +' </p><button class="fajitas">ORDER NOW!</button></div>')

	$('.plate').on('click', function(){

		console.log($(this).attr('data-id'));

		console.log( enchiladas.create())
		// console.log( tacos.create());
		// var s = confirm('Are you sure?') 
		// if (s === true) {
		// 	$('.order').append( enchiladas.create())
		})




		// console.log($(this).parent().attr('data-id'))


		// 	// return $('.order').append()

		// }

});