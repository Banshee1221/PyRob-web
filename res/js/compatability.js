function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
    }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
    }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
        name: M[0],
        version: M[1]
    };
}

$( document ).ready(function() {
    var browser = get_browser_info();
    //alert(browser.name + browser.version);

    if (browser.name.toString() == "Chrome") {
        //alert("Chrome!")
        if (browser.version < 35) {
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }
    if (browser.name.toString() == "IE" || browser.name.toString() == "MSIE") {
        //alert("IE!");
        $("#teamModal").removeClass("modal-fixed-footer");
        $("#supModal").removeClass("modal-fixed-footer");
        if (browser.version < 10) {
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
        else {
            $("#title").css("margin-top", "-200px")
        }
    }
    if (browser.name.toString() == "Firefox") {
        if (browser.version < 31) {
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }
    if (browser.name.toString() == "Safari") {
        if (browser.version < 7) {
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }
})
