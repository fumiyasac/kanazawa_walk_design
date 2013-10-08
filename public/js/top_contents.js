/*
    top_contents.js	
	
	Fumiya Sakai(Just One Factory)
	
*/

$(document).ready(function(){

    var WRAPPER = "#wrapper, .backstretch";
    var NOW_LOADEING = "#nowLoading";
    var MAIN_NAV = "#header div nav ul li a";
    var BANNERS = ".reports a";

    $(WRAPPER).css("display","none");
    $(NOW_LOADEING).css("display","block");	
	
    $(window).load(function(){
        $(NOW_LOADEING).fadeOut("slow",function(){
            $(WRAPPER).css("display","block");
            $(WRAPPER).css("opacity",0);
            $(WRAPPER).fadeTo("slow", 1.0, function(){
				
                /* Edit Action */
				
            });
        });
    });
    
    //Rollover Action.
	$(MAIN_NAV).opOver(1.0,0.3,400,400);
	$(BANNERS).opOver(1.0,0.6,400,400);
	
	//Form Auto Clear
	$(".autoClear").css("color","#999999").autoclear();

	$("#ticker").ticker({
 		cursorList:  "_",
 		rate: 100,
 		delay: 8000
	}).trigger("play");

});
