if($("html").hasClass("ie")){
	if($("html").hasClass("ie10") || $("html").hasClass("ie9")){
		if($("body").hasClass("light-version")){
			$(".aclock-wrapper canvas").removeClass("CoolClock:darkSwissRail1");
			$(".aclock-wrapper canvas").addClass("CoolClock:iedarkSwissRail1");
		}else if($("body").hasClass("color-version")){
			$(".aclock-wrapper canvas").removeClass("CoolClock:colorswissRail1");
			$(".aclock-wrapper canvas").addClass("CoolClock:iecolorswissRail1");
		}
		else{
			$(".aclock-wrapper canvas").removeClass("CoolClock:swissRail1");
			$(".aclock-wrapper canvas").addClass("CoolClock:ieswissRail1");
		}
	}
}else{
	$(document).ready(function(e) { mediaQuaries(e); });	
	$(window).resize(function(e) { mediaQuaries(e);	});
}


function mediaQuaries(e){
	enquire.register("only screen and (min-width: 1200px)", {
		match : function() {
			CoolClock.config.defaultRadius = 354;
			CoolClock.findAndCreateClocks();
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 980px) and (max-width: 1199px)", {
		match : function() {
			CoolClock.config.defaultRadius = 354;	
			CoolClock.findAndCreateClocks();
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 768px) and (max-width: 979px)", {
		match : function() {
			CoolClock.config.defaultRadius = 354;
			CoolClock.findAndCreateClocks();
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 600px) and (max-width: 767px)", {
		match : function() {
			CoolClock.config.defaultRadius = 267;
			CoolClock.config.skins.swissRail1.secondDecoration.radius = 3.2;
			CoolClock.config.skins.swissRail1.secondDecoration.startAt = 91;
			CoolClock.config.skins.darkSwissRail1.secondDecoration.radius = 3.2;
			CoolClock.config.skins.darkSwissRail1.secondDecoration.startAt = 91;
			CoolClock.findAndCreateClocks();
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 480px) and (max-width: 599px)", {
		match : function() {
			CoolClock.config.defaultRadius = 210;
			CoolClock.config.skins.swissRail1.secondDecoration.radius = 3.2;
			CoolClock.config.skins.swissRail1.secondDecoration.startAt = 92;
			CoolClock.config.skins.darkSwissRail1.secondDecoration.radius = 3.2;
			CoolClock.config.skins.darkSwissRail1.secondDecoration.startAt = 92;
			CoolClock.findAndCreateClocks();
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 320px) and (max-width: 479px)", {
		match : function() {
			CoolClock.config.defaultRadius = 146;
			CoolClock.config.skins.swissRail1.secondDecoration.radius = 3.2;
			CoolClock.config.skins.swissRail1.secondDecoration.startAt = 92;
			CoolClock.config.skins.darkSwissRail1.secondDecoration.radius = 3.2;
			CoolClock.config.skins.darkSwissRail1.secondDecoration.startAt = 92;
			CoolClock.findAndCreateClocks();
		},
		unmatch : function() {
			
		}
	});
}