// JavaScript Document

jQuery(document).ready(function(){
	
	//$('.indicator').html('<i class="fa fa-angle-down"></i>')
	/*$('.indicator').html('<i class="fa fa-plus"></i>');
	$('.menuzord-menu li').mouseenter(function(e) {
        $(this).children('a').children('.indicator').html('<i class="fa fa-angle-down"></i>');
		
    });
	$('.menuzord-menu li').mouseleave(function(e) {
        $(this).children('a').children('.indicator').html('<i class="fa fa-plus"></i>');
		
    })*/
	
	
	
	
	
	$('.showhide').click(function(e) {
        if($(this).hasClass('oc')){
			$('.showhide').children('em').css('background','#000');
			$('.showhide').removeClass('oc');
		}else{
			$('.showhide').children('em').css('background','#552c2b');
			$('.showhide').addClass('oc');
		}
    });
	
	
	
	$('.location-tooltip .loc-close').click(function(e) {
        $(this).parent().fadeOut(100);
		$('.locations-list .resp-tabs-container ul li a').removeClass('active');
    });
	
	$('.location-point').click(function(e) {
		$('.location-tooltip').fadeOut(100);
        var target = $(this).attr('data_location');
		$('.'+target).fadeIn(150);
    });
	
	$('.locations-list .resp-tabs-container ul li a').click(function(e) {
		e.preventDefault();
		$('.location-tooltip').fadeOut(100);
		$('.locations-list .resp-tabs-container ul li a').removeClass('active');
        var target = $(this).attr('data_location');
		$('.'+target).fadeIn(150);
		$(this).addClass('active');
		//alert(22);
    });
	
	
	
	
});