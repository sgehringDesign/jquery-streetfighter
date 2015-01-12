

// NOTICED IN ORGINIAL "var hadoukenSound = false;" is global

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


$(document).ready(function() {


  // RYU EVENTS
	$('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
		$('.ryu-ready').show();
    $('.ryu').data("state", "ready");
		console.log("enter");
  })
  .mouseleave(function() {
		$('.ryu-action').hide();
    $('.ryu-still').show();
    $('.ryu').data("state", "still");
    console.log("leave");
  })
  .mousedown(function() {
    playHadouken(); 
    $('.ryu-action').hide();
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
    $('.ryu-action').hide();
  	$('.ryu-ready').show();
    console.log("up");
  })
  	

  // KEY EVENTS
  $(document).keydown(function(e) {
  	if(e.keyCode === 88) {
  		$('.ryu-action').hide();
    	$('.ryu-cool').show();
    	console.log("x key down");
  	}
	})
	.keyup(function(e) {

    console.log("x key up");

		if(e.keyCode === 88) {

    	$('.ryu-action').hide();
      
      if($('.ryu').data("state") == "ready") {
        $('.ryu-ready').show();
        return;
      }
    	$('.ryu-still').show();
  	}
    
	});


});

