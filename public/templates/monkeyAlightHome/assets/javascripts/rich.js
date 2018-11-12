// 2014


/* 

RB: 

Made this little routiene to equalise the heights in the desktop version footer
*/

$(document).ready(function() {
		
	if($(window).width() > 768) {
		equaliseHeight('.footer-height-equalise-wrapper');
	}
	
	
	$(window).resize(function() {
		
		$(this).find('.footer-height-equalise-wrapper .height-equalise').css('min-height', 0);
		
		if($(window).width() > 768) {
			equaliseHeight('.footer-height-equalise-wrapper');
		}

	});
	
});

function equaliseHeight(wrapper) {
	
	
	$(wrapper).each(function() {
		
		$(this).find('.height-equalise').css('min-height', 0);
				
		var h = 0;
		
		$(this).find('.height-equalise').each(function() {
	
			if(h < $(this).height()) {
				h = $(this).height();
			}
			
		});
		
		$(this).find('.height-equalise').css('min-height', h);
		
	});
	
	
}




$('#same-day-modal select[name="CollectionDate"]').change(function() {
	
	show_hide_sameday_collection_times();
	
});


show_hide_sameday_collection_times();

function show_hide_sameday_collection_times() {
	
	if($('#same-day-modal select[name="CollectionDate"]').find('option:selected').hasClass('collectiontoday')) {
		
		$('#same-day-modal select[name="CollectionTime"] option.todayonly').attr('disabled',true);
		$('#same-day-modal li.todayonly').hide();
		

	} else {
		$('#same-day-modal select[name="CollectionTime"] option.todayonly').attr('disabled',false);
		$('#same-day-modal li.todayonly').show();
		
	}
	
}


// Focus on weight

$('.send-modal:not(#same-day-modal)').bind('opened', function () {
   
	$(this).find('input[name^="weight"]').focus();

});

$('#same-day-modal').bind('opened', function () {
    
	$(this).find('input[name="ShipmentCollectionPostcode"]').focus();

});

$('.price-expander-more').click(function() {    
    var expander=$(this).prev();
    var divs=expander.find('div');    
    var i=0;
    divs.each(function(){            
      if($(this).is(':hidden')) {
        i = i + 1;
      }else{
        // not hidden
      }      
      if((i > 0) && (i < 10)) {        
        $(this).show();
      }      
    });    
  });

