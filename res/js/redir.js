$( document ).ready(function(){
   var urlSplit = document.URL.split("#");
    if (urlSplit[1]) {
    	if (urlSplit[1] != "ICF" ||
    		urlSplit[1] != "DoSA" ||
    		urlSplit[1] != "DoCS" ||
    		urlSplit[1] != "PP" ||
    		urlSplit[1] != "GDD" ||
    		urlSplit[1] != "TDD" ) {
        	location.href = "graphs.html" + "#" + urlSplit[1];
		}
    }
    
});