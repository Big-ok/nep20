let filename = window.location.pathname.split('/').pop()

if (filename == "index.html") {
	const slider = document.querySelector(".slider"); 
	const showPresentation = document.querySelector(".show-presentation"); 
	const presentation = localStorage.getItem("presentation");
	const removePresentation = document.querySelectorAll(".remove-presentation");
	const addPresentation = document.querySelector(".add-presentation");

	if (presentation == "no-active") {
		if(!slider.classList.contains('no-active')) {
			slider.classList.add("no-active");
			showPresentation.classList.remove("no-active");
		}
	} else {
		if(slider.classList.contains('no-active')) {
			slider.classList.remove("no-active");
		}
	}

	for (let i = 0; i < removePresentation.length; i++) {
		removePresentation[i].addEventListener("click", (e) => {
			e.preventDefault();	
			slider.classList.add("no-active");
			localStorage.setItem("presentation", "no-active");
			if(showPresentation.classList.contains('no-active')) {
				showPresentation.classList.remove("no-active");
			}
		});
	}

	addPresentation.addEventListener("click", (e) => {
		// e.preventDefault();
		slider.classList.remove("no-active");
		localStorage.removeItem("presentation");
		if(!showPresentation.classList.contains('no-active')) {
			showPresentation.classList.add("no-active");
		}
	});
}
// ===============


;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	// Go to next section
	var gotToNextSection = function(){
		var el = $('.fh5co-learn-more'),
			w = el.width(),
			divide = -w/2;
		el.css('margin-left', divide);
	};

	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};



	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	
	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	

	// Document on load.
	$(function(){
		
		// gotToNextSection();
		loaderPage();
		// ScrollNext();

		
		// Animate
		contentWayPoint();

	});


}());


$(document).ready(function() {

	$("body").css("display", "none");

    $("body").fadeIn(2000);
    $("body").stop().animate({
    	opacity: 1
    });


	$("a.transition").click(function(event){

		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		

	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});