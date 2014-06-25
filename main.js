//create a variable, target the variable against a class or id
var welcome = $('#welcome-message');
//call the var and add .css; first is property to change, then the value 
welcome.css('font-size', '72px');

welcome.css({
	'font-size': '72px',
	'color': 'red',
	'font-weight': 'bold'
});

$('.start').css ('color', 'blue')

