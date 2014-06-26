	var counter =0;

$(document).on('ready', function(){



// $('button').on('click', function(){

	
// 	console.log('hello from button.click', counter);
// 	$('button').css('backgroundColor', 'blue');	

// 	$('button').fadeOut(3000);
// 	$('button').fadeIn(3000);
// 	$('button').fadeIn("Good Job");


		

// 	counter++;
		
// 	});

	
// // $('#my-button').on('click', function(){ or

// $('#my-button').click(function(eventArgs){
// 	console.log(eventArgs)

// });

$('#button2').click(function(){

	$('#button2').fadeOut(2000, function(){

		$('#button2').fadeIn(2000, function(){

			$('#button2').css('backgroundColor', 'blue');
			setTimeout(function(){

				alert("Pretty cool, huh?");
					setTimeout(function(){
						
						var response = prompt('Please rate this event. (1-5)');
						if(+response <4){
							alert('Dude, dont be so damn critical!');
							$('#bad').show();
						}

						else {
							alert('Thanks, I did all for YOU!');
							$('#hug').show();

						}

					}, 1000)

			}, 1000)

		});
	});




});


});