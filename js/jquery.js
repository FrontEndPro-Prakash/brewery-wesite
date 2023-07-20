$(document).ready(function () {
	
	//page loader start
	TweenMax.to("#splash-scren img", 1, {scale:"1", ease:Expo.easeInOut, delay:0.1});
	setTimeout(function(){$("#splash-scren").fadeOut();},1200);
	$("#innnerpageSS").fadeOut();
	//page loader end
	
	$('.menu-btn').click(function(){
		$('.menu-canvas').toggleClass('opneMenuicon');
		$('body').toggleClass('remove_scroll');
	});

	const menulinkbtn = document.querySelector(".menu-btn");
	const menubarbox = document.querySelector(".menu-list");
	menulinkbtn.addEventListener("click", function() {
		if (!menubarbox.classList.contains("opneMenu")) {    
			TweenMax.to(".menu-list", 1, {x:"0%", ease:Power4.easeOut});
			TweenMax.to(".menu-list-view", 1, {x:"0%", ease:Power4.easeOut});
			menubarbox.classList.add("opneMenu");
		} else {
			TweenMax.to(".menu-list", 1, {x:"-100%", ease:Power4.easeOut});
			TweenMax.to(".menu-list-view", 1, {x:"100%", ease:Power4.easeOut});
			menubarbox.classList.remove("opneMenu");
		}
	});
	
	$(".menu-list a").click(function(){
		TweenMax.to(".menu-list", 1, {x:"-100%", ease:Power4.easeOut});
		TweenMax.to(".menu-list-view", 1, {x:"100%", ease:Power4.easeOut});
		menubarbox.classList.remove("opneMenu");
	});
	//menu toggle end	
	
	//hide age section start
	$('#enter_age').click(function(){
		$('body').removeClass('remove_scroll'),500;
		$('.enter_age_sec').fadeOut('500');
	})
	//hide age section end
	
	/*form slide animation*/
	$('.homec-next').click(function() {
		TweenMax.to(".home-contact-form", 1, {alpha:"1", ease:Power4.easeOut, delay:0.3});
		TweenMax.to(".home-contact-content", 1, {alpha:"0", ease:Power4.easeOut});
		TweenMax.to(".home-contact-image", 1, {x:"-100%", ease:Power4.easeOut});
		TweenMax.to(".homec-back", 1.5, {alpha:"1", ease:Power4.easeOut});
		$('.home-contact-form').css('z-index', 23);
	});
	$('.homec-back').click(function(){
		$(".animateContactForm").removeClass("showForm");
		TweenMax.to(".home-contact-form", 1, {alpha:"0", ease:Power4.easeOut});
		TweenMax.to(".home-contact-content", 1, {alpha:"1", ease:Power4.easeOut});
		TweenMax.to(".home-contact-image", 1, {x:"0%", ease:Power4.easeOut});
		TweenMax.to(".homec-back", 1.5, {alpha:"0", ease:Power4.easeOut});
		$('.home-contact-form').css('z-index', 20);
	});
	/*form slide animation end*/

	/*thank you*/
	$('.thank_you').click(function(){
		$('.home-contact-form .form-part').slideUp(500);
		$('.thankyou_part').slideDown(500);
		$('.home-contact-form').css('z-index', 23);
	})
	/*thank you*/
		
});

$(document).ready(function() {
  	$('.light_box').magnificPopup({
	  	type:'image',
	  	gallery:{
	    	enabled:true
	  	},
		zoom: {
	    	enabled: true,
	    	duration: 300,
	    	easing: 'ease-in-out',
	    	opener: function(openerElement) {
	      	return openerElement.is('img') ? openerElement : openerElement.find('img');
	      	}
		}
  	});
});

AOS.init({
})

/*ourbeer list content section animation*/	
inView('.ourBeers-sec')
.once('enter', ourbeerrun);
function ourbeerrun(){
	color = ["#24c5d3","#dd3c33","#4aa550", "#ebbe4d"];
	$(document).ready(function() {
	$('.ourBeers-list-content').slick({
		infinite: true,
		autoplay: true,
		speed: 300,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="39.698" height="11.772" viewBox="0 0 39.698 11.772"><path id="right-arrow" d="M5.886,167.5l1.768,1.768-2.867,2.867H39.7v2.5H4.787L7.654,177.5l-1.768,1.768L0,173.386Z" transform="translate(0 -167.5)" fill="#24c5d3"/></svg>',
		nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="39.698" height="11.772" viewBox="0 0 39.698 11.772" class="slick-next"><path id="right-arrow" d="M33.812,167.5l-1.768,1.768,2.867,2.867H0v2.5H34.911L32.044,177.5l1.768,1.768,5.886-5.886Z" transform="translate(0 -167.5)" fill="rgba(36,197,211,0.7)"/></svg>',
		asNavFor: '.ourBeers-list'
	});
	$('.ourBeers-list').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		arrows: false,
		draggable: false
	});
	var height= $(".ourBeers-list").height()-100;
	$(".ourBeers-list-content").css({height: height});
	$(".ourBeers-list-content").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.oBc-current').text('0'+(nextSlide+1));		
		$(".oBc-current").css("color",color[nextSlide]);
		$(".ourBeers-list-content h2").css("color",color[nextSlide]);		
		$(".ourBeers-logo path").css("fill",color[nextSlide]);
		$(".slick-arrow path").css("fill",color[nextSlide]);
		$(".ourBeers-left h2").css("color",color[nextSlide]);		
		$(".ourBeers-left .obl-btn").css("color",color[nextSlide]);		
		$(".ourBeers-left .obl-btn").css("border-color",color[nextSlide]);		
		$(".ourBeers-left .obl-btn path").css("fill",color[nextSlide]);		
	});

	$(".ourBeers-list-content").on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$(".ourBeers-sec").css("background-color",color[currentSlide]);	
	});	
	});	
}
/*ourbeer list content section animation*/