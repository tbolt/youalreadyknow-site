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
});
