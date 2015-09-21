/*
    category_top.js	
	
	Fumiya Sakai(Just One Factory)
	
*/

$(document).ready(function(){

    var MAIN_NAV = "#leftContents nav ul li a";
    var BANNERS = ".reports a";
		
	//Rollover Action.
	$(MAIN_NAV).opOver(1.0,0.3,400,400);
	$(BANNERS).opOver(1.0,0.6,400,400);
	
	//Form Auto Clear
	$(".autoClear").css("color","#999999").autoclear();	

	//jQuery Cycle Plugin(photo gallery)
  	$('#slider').cycle({
  		fx : 'fade',
  		speed : 600,
  		timeout : 6000,
  		easing : 'swing',
		cleartype: true
  	});

	//jQuery Accessible News Slider(photo gallery)	
	$(".computers_technology").accessNews({
        newsHeadline: 'その他のカテゴリー記事',
        newsSpeed: 'normal'
    });

	
});
