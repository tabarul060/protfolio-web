//Owl carousel
 $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
      $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [5000])
      })
      $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
      })
    })
 //Animated Head Line
$(function() {
        $('.site-title').animatedHeadline({
            animationType: 'clip'
        });
    })
//Menu
function openMenu(){
  document.getElementById('menu-nav').style.width="100%";
}
function closeMenu(){
  document.getElementById('menu-nav').style.width="0%";
}

//progress bar
$(".design > span").each(function() {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate({
      width: $(this).data("origWidth") // or + "%" if fluid
    }, 1200);
});

$(function(){
 $('.menu a, .next-section a, .site-buttons a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },2000);
 });

});

var mixer = mixitup('.project-grid');

 new WOW().init();
//ukit

 