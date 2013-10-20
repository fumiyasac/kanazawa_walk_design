/*
    pagescroller.js	
	
	Fumiya Sakai(Just One Factory)
	
*/
$(function(){
  
    var selector = "a[href=\"#toTop\"]";
    var durationParam = 600;
    var easingParam = "easeInOutExpo";    
    var $pageTopLink = $(selector);
    
    $pageTopLink.bind("click", onClick);
    
    function onClick(e) {
      e.preventDefault();
      
      $("html, body").animate({
        scrollTop: 0
      }, {
        duration: durationParam,
        easing: easingParam
      });
    }
  
});