$(function() {
	var a = true;
	index = 0;
	var time = 1000;
	var lang = $('.a>div').length;
	document.onmousewheel = function(e) {
		e = e || event || window.event;

		if(a) {
			a = false;
			if(e.deltaY > 0) {
				index++;
				if(index > lang - 1) {
					index = 0;
				}
				$(".b").removeClass("movedown");
				$(".b").removeClass("moveup");
				$(".b").css({
					zIndex: 1
				});
				$(".b").eq(index).css({
					zIndex: 2
				})
				$(".b").eq(index).addClass("movedown");
			} else if(e.deltaY < 0) {
				index--;
				if(index < 0) {
					index = lang - 1;
				}
				$(".b").removeClass("movedown moveup");
				$(".b").css({
					zIndex:1
				});
				$(".b").eq(index).css({
					zIndex:2
				})
				$(".b").eq(index).addClass("moveup");

	}
		console.log(index);
		setTimeout(function() {
			a = true;
		}, 1000)
	}
}
})