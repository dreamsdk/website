(function($) {
  "use strict"; // Start of use strict

	var allYourBaseAreBelongToUs = (function() {
		var SOMEBODY_SET_UP_US_THE_BOMB = "@";
		var FOR_GREAT_JUSTICE = "mai";
		var WHAT_YOU_SAY = "lto";
		var MOVE_ZIG = ".";

		var YOU_HAVE_NO_CHANCE_TO_SURVIVE = "[DreamSDK] Comments about the DreamSDK environment package";
		var MAKE_YOUR_TIME = "?subject=";
		
		var __execute = (function(zig, screen, on, turn, main) {
			var ZERO_WING = FOR_GREAT_JUSTICE + WHAT_YOU_SAY + ":" 
				+ zig + " <" + main + SOMEBODY_SET_UP_US_THE_BOMB + screen + turn + MOVE_ZIG + on + ">"
				+ MAKE_YOUR_TIME + YOU_HAVE_NO_CHANCE_TO_SURVIVE;
			location.href = ZERO_WING;
		});
		
		__execute('SiZiOUS', 'gm', 'com', 'ail', 'sizious');
	});
  
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.modal-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  
  $("#send-email-link").click(function(event) {
	  event.preventDefault();
	  allYourBaseAreBelongToUs();
  });
  
  $(document).ready(function() {
	$("#year").html(new Date().getFullYear());
  });
  
})(jQuery); // End of use strict
