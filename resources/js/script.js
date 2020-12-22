$(function() {
        $('.site-title').animatedHeadline({
            animationType: 'clip'
        });
    })

//tabs
$( function() {
    $( ".tabs" ).tabs();
  } );
//accordion
 $( function() {
    $( ".accordion" ).accordion();
  } );
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
 $('.next-section a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },2000);
 });

});
var mixer = mixitup('.project-grid');