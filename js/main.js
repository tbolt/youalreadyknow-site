$(document).ready(function() {
  /* ======= Scrollspy ======= */
  $('body').scrollspy({ target: '#header', offset: 100});

  /* ======= ScrollTo ======= */
  $('a.scrollto').on('click', function(e){
      //store hash
      var target = this.hash;
      e.preventDefault();

  	$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
      //Collapse mobile menu after clicking
  	if ($('.navbar-collapse').hasClass('in')){
  		$('.navbar-collapse').removeClass('in').addClass('collapse');
  	}
  });

  /* ======= Fixed Header animation ======= */
  $(window).on('scroll load', function() {
    if ($(window).scrollTop() > 0 ) {
       $('#header').addClass('header-scrolled');
    } else {
       $('#header').removeClass('header-scrolled');
    }
  });

  /* ======= Vegas Plugin ======= */
  /* Ref: http://vegas.jaysalvat.com/index.html */
  $('#promo').vegas({
    delay: 8000,
    overlay: 'plugins/vegas/dist/overlays/06.png',
    color: '#101113',
    transition: 'zoomOut',
    transitionDuration: 3000,
    slides: [
        { src: 'images/hero/hero-1.jpg' },
        { src: 'images/hero/hero-2.jpg' },
        { src: 'images/hero/hero-3.jpg' },
        // { src: 'images/hero/hero-4.jpg' },
        // { src: 'images/hero/hero-5.jpg' },
        // { src: 'images/hero/hero-6.jpg' },
        // { src: 'images/hero/hero-7.jpg' },
        // { src: 'images/hero/hero-8.jpg' }
    ]
  });
});
