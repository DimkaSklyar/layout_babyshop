
$("a[href='#small-dialog']").click(function () {
  $("#price").text($(this).closest(".product__item").find(".product__price").text());
  $("#product-img").attr("src", $(this).closest(".product__item").find("img").attr("src"));
  $("#product-name").text($(this).closest(".product__item").find(".product__title").text());
  $("#description").html($(this).closest(".product__item").find(".product__item_description").html())
  $("#inputCar").val($("#product-name").text());
});


$(document).ready(function () {

  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});



  $(".mobile-menu__button").click(function (e) { 
    e.preventDefault();
    $(".navigation__wrapper").toggleClass("active");
    $(".background_shadow").toggleClass("active");
    $(this).children().toggleClass("fa-bars fa-times");
  });

  $(".background_shadow").click(function (e) { 
    e.preventDefault();
    $(".navigation__wrapper").toggleClass("active");
    $(this).toggleClass("active");
    $(".mobile-menu__button").children().toggleClass("fa-bars fa-times");
  });
  $('.slider-container').slick();

  $('.product-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline="August 01 2020 00:00:00 GMT+0300"; 
  initializeClock('clockdiv', deadline);


  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  var mixer = mixitup('.products-hot',{
    "animation": {
        "duration": 607,
        "nudge": false,
        "reverseOut": false,
        "effects": "fade rotateY(94deg) stagger(30ms)"
    }
});



});