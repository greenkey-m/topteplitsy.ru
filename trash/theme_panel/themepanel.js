jQuery("body").append("<div id='theme_panel' class='fixed close_panel'></div>");
jQuery('head').append('<link rel="stylesheet" href="theme_panel/themepanel.css" type="text/css" />');

jQuery( "#theme_panel" ).load("theme_panel/themepanel.html");

jQuery(window).load(function(){

	'use strict';

	// Theme Panel Open/Close
	jQuery( "#theme_panel #theme_panel_button" ).click(function(){
		jQuery( "#theme_panel" ).toggleClass( "close_panel", "open_panel" );
		jQuery( "#theme_panel" ).toggleClass( "open_panel", "close_panel" );
		return false;
	});

	// Color Skins
	jQuery('.color_link').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#changeable_color').attr('href', 'css/colors/' + title + '.css');				
	  	return false;
    });	

    // Nav From Top - For only Fulscreen Versions
	jQuery('.layout_tone').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#changeable_tone').attr('href', 'css/page_tones/' + title + '.css');				
	  	return false;	
    });

});
