function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("avila", "Avila");
    stringsToHide[2] = new Array ("mcc", "MCC");
    stringsToHide[3] = new Array ("mcc", "MCC");
    stringsToHide[4] = new Array ("mcc", "MCC");
    stringsToHide[5] = new Array ("mcc", "MCC");
    stringsToHide[6] = new Array ("wjewell", "Jewell", "WJC");
    stringsToHide[7] = new Array ("mbts", "MBTS");
    stringsToHide[8] = new Array ("Rockhurst");
    stringsToHide[9] = new Array ("SPST", "Saint Paul");
    stringsToHide[10] = new Array ("KCAI");
    stringsToHide[12] = new Array ("mcc", "MCC");
    stringsToHide[13] = new Array ("Park");
    stringsToHide[14] = new Array ("NTS", "Nazarene");
    stringsToHide[15] = new Array ("KCU");
    stringsToHide[16] = new Array ("Conception");
    stringsToHide[17] = new Array ("ncmissouri", "North Central");
    stringsToHide[18] = new Array ("nwmissouri", "Northwest");
    stringsToHide[19] = new Array ("MWSU", "Missouri Western");
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