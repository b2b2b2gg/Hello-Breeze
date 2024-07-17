$(function(){
	
	//메인 메뉴 하이라이트
	$(".home img").mouseenter(function(){
		$(this).attr("src", "images/HOME2.gif");
	});
	$(".home img").mouseleave(function(){
		$(this).attr("src", "images/HOME.gif");
	});
	
	$(".hello img").mouseenter(function(){
		$(this).attr("src", "images/HelloBreeze2.gif");
	});
	$(".hello img").mouseleave(function(){
		$(this).attr("src", "images/HelloBreeze.gif");
	});	

	$(".room img").mouseenter(function(){
		$(this).attr("src", "images/ROOM2.gif");
		$(".booking").stop().slideDown(500);	
	});
	$(".room img").mouseleave(function(){
		$(this).attr("src", "images/ROOM.gif");	
		$(".booking").stop().slideUp(500);			
	});
	
	$(".contact img").mouseenter(function(){
		$(this).attr("src", "images/CONTACT2.gif");
	});
	$(".contact img").mouseleave(function(){
		$(this).attr("src", "images/CONTACT.gif");
	});		
	
	$(".notice img").mouseenter(function(){
		$(this).attr("src", "images/NOTICE2.gif");
	});
	$(".notice img").mouseleave(function(){
		$(this).attr("src", "images/NOTICE.gif");
	});	
	
	//서브 메뉴 하이라이트
	$(".booking").mouseenter(function(){	
		$(this).css({color:"#6b8e23", fontWeight:"bold"}).stop().slideDown(500);
	});
	$(".booking").mouseleave(function(){
		$(this).css({color:"black", fontWeight:"normal"}).stop().slideUp(500);
	});
	$(".booking").click(function(){
		window.open("https://booking.naver.com/");
	});
	
	//이미지 슬라이드
	let imgNum = 0;
	
	setInterval(function(){
		if(imgNum<4){
			imgNum++;
		}else{
			imgNum=0;
		}
		let imgWidth = imgNum*(-1200)+"px"
		$("#mainImg").animate({
			left:imgWidth
		}, 1000);
	}, 3000);
	
	//링 슬라이드

	
	$("#ring li").click(function(){	
		let ringIndexNum = $(this).index();
		$("#mainImg").animate({
			left:ringIndexNum*(-1200)+"px"
		});
	});		
	
	$("#ring li img").click(function(){
		$("#ring li img").attr("src", "images/ring2.png");		
		$(this).attr("src", "images/ring1.png");
	});
	
	//팝업창
	$("#popup .close").click(function(){
		$("#popup").hide();
	});
	$("h1").click(function(){
		$("#popup").show();
	});
	
});