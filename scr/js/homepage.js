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
	
	//main
	$('.main-bottom-right-center-left').hover(function(){
		$(this).attr('src','dist/img/images/prev_Arrow2.png')
	},
	function(){
		$(this).attr('src','dist/img/images/prev_Arrow.png')
	})
	$('.main-bottom-right-center-right').hover(function(){
		$(this).attr('src','dist/img/images/next_Arrow2.png')
	},
	function(){
		$(this).attr('src','dist/img/images/next_Arrow.png')
	})
	

	$('.main-nav-span').eq(0).find('span').hide();	

	
	var index=0
	$('.main-bottom-right-center-left').click(function(){
		index--;
		if(index<0){
			index=5;
		}
		main1()
	})
	$('.main-bottom-right-center-right').click(function(){
		index++;
		if(index>5){
			index=0;
		}
		main2()
	})
	$('.main-nav-span').click(function(){
		i=$(this).index();
		if(i<index){
			index=i;
			main1();
		}
		if(i>index){
			index=i;
			main2();
		}
	})
	$('.main-text').hide();
	$('.main-text').eq(0).show();
	function main1(){
		$('.main-nav-span').eq(index).find('span').hide();
		$('.main-nav-span').eq(index).siblings().find('span').show();
		$('.main-nav-span').eq(index).siblings().find('i').removeClass('acc');
		$('.main-nav-span').eq(index).find('i').addClass('acc');
		$('.main-text').hide();
		$('.main-text').eq(index).show();
		$('.main-text').eq(index).css({
			left:-300
		})
		$('.main-text').eq(index).animate({
			left:0
		})
		$('.main-text .main-bottom-right').eq(index).css({
			left:0
		})
		$('.main-text .main-bottom-right').eq(index).animate({
			left:485
		},1000)
	}
	function main2(){
		$('.main-nav-span').eq(index).find('span').hide();
		$('.main-nav-span').eq(index).siblings().find('span').show();
		$('.main-nav-span').eq(index).siblings().find('i').removeClass('acc');
		$('.main-nav-span').eq(index).find('i').addClass('acc');
		$('.main-text').hide();
		$('.main-text').eq(index).show();
		$('.main-text').eq(index).css({
			left:300
		})
		$('.main-text').eq(index).animate({
			left:0
		})
		$('.main-text .main-bottom-right').eq(index).css({
			left:1000
		})
		$('.main-text .main-bottom-right').eq(index).animate({
			left:485
		},1000)
		
	}
})
