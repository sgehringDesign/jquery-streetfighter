

// NOTICED IN ORGINIAL "var hadoukenSound = false;" is global

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function resetRyu() {
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.ryu-cool').hide();
}


$(document).ready(function() {

	$('.ryu').mouseenter(function() {
    	resetRyu();
		$('.ryu-ready').show();
  	})
  	.mouseleave(function() {
		resetRyu();
    	$('.ryu-still').show();
  	})
  	.mousedown(function() {
    	playHadouken(); 
    	resetRyu();
    	$('.ryu-throwing').show();
    	$('.hadouken').show();
    	$('.hadouken').finish().show()
    	.animate(
    		{'left': '300px'}, 
    		500,
    		function() {
    			$(this).hide();
    			$(this).css('left', '-200px');
    		}
    	);
	})
  	.mouseup(function() {
    	resetRyu();
  		$('.ryu-ready').show();
  	})
  	
  	$(document).keydown(function(e) {
  		if(e.keyCode === 88) {
  			resetRyu();
    		$('.ryu-cool').show();
  		}
	})
	.keyup(function(e) {
		if(e.keyCode === 88) {
    		resetRyu();
    		$('.ryu-still').show();
  		}
	});
});

