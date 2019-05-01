jQuery(document).ready(function(){
        $('span.addtlInfoItem').each(function(){
    var thisLink = $(this);
        thisLink.find('span.addtlInfoItem a').each(function(){
              if($(this).is(':contains("gutenberg")')); 
			      else ($(this).is(':not(:contains("nwmissouri"))')
			          thisLink.find('span.addtlInfoItem').hide();
            }
           });
    });