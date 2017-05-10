$(function(){
	//banner
	var img=['dist/img/images/banner01_bg.jpg','dist/img/images/banner02_bg.jpg','dist/img/images/banner01_bg.jpg']
	var index=0
	$('.banner .banner-bottom .banner-bottom-left').click(function(){
		index--;
		if(index<0){
			index=img.length-1
		};
		banner();
	});
	$('.banner .banner-bottom .banner-bottom-right').click(function(){
		index++;
		if(index>2){
			index=0
		};
		banner();
	});
	$('.banner-bottom-center-circular span').click(function(){
		index=$(this).index()
		banner();
	});
	function banner(){
		$('.banner-bg').attr('src',img[index]);
		$('.banner-bottom-center-circular span').css({
			'background':'white',
		});
		$('.banner-bottom-center-circular span').eq(index).css({
			'background':'blue',
		});
		if(index==0){
			banner1();
		}else if(index==1){
			banner2();
		}else if(index==2){
			banner3();
		}
	}
	
	function banner1(){
		banner4();
		$('.banner-animate').hide();
		$('.banner-animate1').hide();
		$('.banner-animate2').hide();
		$('.banner-animate').show();
		$('.banner-animate .banner-bg-a').animate({
			left:'575px',
		});
		$('.banner-animate .banner-bg-b').animate({
			right:'420px',
		});
		
	}
	banner1();
	function banner2(){
		banner4();
		$('.banner-animate').hide();
		$('.banner-animate1').hide();
		$('.banner-animate2').hide();
		$('.banner-animate1').show();
		$('.banner-animate1 .banner-bg-d').animate({
			left:'113px',
		});
		$('.banner-animate1 .banner-bg-e').animate({
			right:'992px',
		});	
	}

	function banner3(){
		banner4();
		$('.banner-animate').hide();
		$('.banner-animate1').hide();
		$('.banner-animate2').hide();
		$('.banner-animate2').show();
		$('.banner-animate2 .banner-bg-g').animate({
			left:'575px',
		});
		$('.banner-animate2 .banner-bg-h').animate({
			right:'420px',
		});
	}

	function banner4(){
		$('.banner-animate .banner-bg-a').css({
			left:'0px',
		});
		$('.banner-animate .banner-bg-b').css({
			right:'0px',
		});
		$('.banner-animate1 .banner-bg-d').css({
			left:'0px',
		});
		$('.banner-animate1 .banner-bg-e').css({
			right:'0px',
		});	
		$('.banner-animate2 .banner-bg-g').css({
			left:'0px',
		});
		$('.banner-animate2 .banner-bg-h').css({
			right:'0px',
		});
	}
	//header
	$('.header-nav-li').hover(function(){
		
		$(this).find('img').attr('src','dist/img/images/nav_downarrow2.png');
		$(this).find('.header-nav-li-drop-down').stop().slideDown();
	},
	function(){
		$(this).find('img').attr('src','dist/img/images/nav_downarrow.png');
		$(this).find('.header-nav-li-drop-down').slideUp();
	});
})
