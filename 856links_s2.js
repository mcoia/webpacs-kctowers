function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("avila");
    stringsToHide[2] = new Array ("mcckc");
    stringsToHide[6] = new Array ("wjewell", "William Jewel");
	stringsToHide[7] = new Array ("mbts");
    stringsToHide[8] = new Array ("rockhurst");
    stringsToHide[9] = new Array ("SPST");
    stringsToHide[10] = new Array ("KCAI");
    stringsToHide[13] = new Array ("park");
	stringsToHide[14] = new Array ("nts", "NTS", "Nazarene");
	stringsToHide[16] = new Array ("Conception Abbey");
	stringsToHide[17] = new Array ("ncmissouri");
    stringsToHide[18] = new Array ("nwmissouri");
    stringsToHide[19] = new Array ("missouriwestern");
    stringsToHide[20] = new Array ("KCKCC");
    stringsToHide[21] = new Array ("Benedictine");
    stringsToHide[22] = new Array ("Calvary");	
    
    var scopeDropdown = $("#searchscope").val();
    
    delete stringsToHide[scopeDropdown];
	
    if ($("table").is('.bibLinks')){
	for (var k in stringsToHide) {
	    for (var l in stringsToHide[k]) {
		$(".bibLinks a").each(function(index, element) {
		    if($(element).parent().html().indexOf(stringsToHide[k][l]) > -1) {
			$(element).parent().parent().hide()
		    }    
		});
	    }
	}
	if ($(".bibLinks tr[style*=none]").length < $(".bibLinks a").length){
	    $(".bibLinks").show();       
	}
    }  
}
    
    
    $(document).ready(function () {
	hideLinks();
});