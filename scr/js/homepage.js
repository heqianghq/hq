$(function(){
	img=['dist/img/images/banner01_bg.jpg','dist/img/images/banner02_bg.jpg','dist/img/images/banner01_bg.jpg']
	var index=0
	$('.banner .banner-bottom .banner-bottom-left').click(function(){
		index--;
		if(index<0){
			index=img.length-1
		};
		$('.banner>img').attr('src',img[index]);
		$('.banner-bottom-center-circular span').css({
			'background':'white',
		});
		$('.banner-bottom-center-circular span').eq(index).css({
			'background':'blue',
		});
		
	});
	$('.banner .banner-bottom .banner-bottom-right').click(function(){
		index++;
		if(index>2){
			index=0
		};
		$('.banner>img').attr('src',img[index]);
		$('.banner-bottom-center-circular span').css({
			'background':'white',
		});
		$('.banner-bottom-center-circular span').eq(index).css({
			'background':'blue',
		});
	});
	$('.banner-bottom-center-circular span').click(function(){
		$('.banner-bottom-center-circular span').css({
			'background':'white',
		});
		$(this).css({
			'background':'blue',
		});
		$('.banner>img').attr('src',img[$(this).index()]);
		
	});
	$('.header-nav-li').hover(function(){
		$(this).find('img').attr('src','dist/img/images/nav_downarrow2.png')
	},
	function(){
		$(this).find('img').attr('src','dist/img/images/nav_downarrow.png')
	});
})
