
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
	})
	.mouseleave(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
		$('.ryu').data("state", "still");
	})
	.mousedown(function() {
		playHadouken(); 
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		$('.hadouken').finish().show()
		.animate({'left': '300px'}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '-200px');
		});
	})
	.mouseup(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	})

	// KEY EVENTS
	$(document).keydown(function(e) {
		if(e.keyCode === 88) {
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e) {
		if(e.keyCode === 88) {
			$('.ryu-action').hide();
			if($('.ryu').data("state") === "ready") {
				$('.ryu-ready').show();
				return;
			}
			$('.ryu-still').show();
		}
	});
});
