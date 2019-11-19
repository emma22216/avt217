$(document).ready(function(){
  console.log('Ready!');
$('.snow').click(function() {
  $('.number-1').fadeOut( "slow", function() {
  });
});
$('.snow').hover(function() {
  $('.number-1').fadeIn( "slow", function() {
  });
});
$('.snow').click(function(){
 $('.number-5').effect( "bounce", {times:3}, 300 );
  });
});
$('.snow').click(function() {
  $('.number-4').animate({
    width: "130%",
    fontSize: "11em",
    borderWidth: "40px"
  }, 1500 );
});
$('.snow').click(function() {
  $('.number-4').animate({
    width: "100%",
    fontSize: "9em",
    borderWidth: "40px"
  }, 1500 );
});
$(document).ready(function(){
  console.log('Ready!');
  $('.snow').click(function() {
    $('.number-1').css('text-align','left');
  });
});
