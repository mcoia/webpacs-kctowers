jQuery(document).ready(function(){

	jQuery('span .addtlInfoItem:not(:contains("Northwest"))').addClass('hideMe');
	jQuery(".hideMe").hide();
	jQuery('span .addtlInfoItem:contains("downloadable")').addClass('showMe');
	jQuery('span .addtlInfoItem:contains("Freely")').addClass('showMe');
	jQuery('span .addtlInfoItem:contains("NORTHWEST")').addClass('showMe');
	jQuery(".showMe").show();
	
});
