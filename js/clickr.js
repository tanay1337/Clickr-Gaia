/* Javascript file for clickr */

"use strict";

// some local variables
var clickr = {

						
  						'clicks':0,
  						'timer':null

};





( function() {

		$('#restart-icon').hide();


		// binds click event to pad
		$( '.clicking-pad' ).on( 'click' , function() { 

			if( clickr.clicks === 0 ){

				startTimer();
			}

			clickr.clicks++;

			$('#mouse-clicks').text( clickr.clicks );

			$('#pad-text').html('You have clicked <strong>'+clickr.clicks+'</strong> times');


		});

		$('#restart-icon').on('click',function(){

			window.location.reload();
		});


 		
	
 

}() );



// startTimer function to start counter and update timer.

function startTimer() {

	clickr.timer = setInterval( changeTimer , 1000);	

}


// function changeTimer to reduce counter by one.
function changeTimer() {

	var timeLeft = parseInt( $('#timer').text() );	

	if( timeLeft === 0 ){

		clearInterval( clickr.timer );

		showResult();
	}
	else{

		$('#timer').text(( timeLeft - 1 ));

	} 

}


// function showResult to show result after required time

function showResult() {

	$( '.clicking-pad' ).unbind( 'click' );

	var averageClick = ( clickr.clicks / 10 ).toFixed( 1 );

	$('#pad-text').append('<br>Average: <strong>'+ averageClick + '</strong> clicks per second');

	$('#restart-icon').fadeIn();


}





	