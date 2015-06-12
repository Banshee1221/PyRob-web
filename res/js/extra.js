//function getInternetExplorerVersion()
//{
//    var rv = -1;
//    if (navigator.appName == 'Microsoft Internet Explorer')
//    {
//        var ua = navigator.userAgent;
//        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
//        if (re.exec(ua) != null)
//            rv = parseFloat( RegExp.$1 );
//    }
//    else if (navigator.appName == 'Netscape')
//    {
//        var ua = navigator.userAgent;
//        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
//        if (re.exec(ua) != null)
//            rv = parseFloat( RegExp.$1 );
//    }
//    return rv;
//}

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

$( document ).ready(function(){
    $('.button-collapse').sideNav({
            menuWidth: 240,
            edge: 'left',
            closeOnClick: true
        }
    );
    $('.modal-trigger').leanModal({
        dismissible: true,
        ready: function() { $("body").css("overflow", "hidden"); },
        complete: function() { $("body").css("overflow", "auto"); }
    });
    $('.materialboxed').materialbox();

    //credit to kennebec https://stackoverflow.com/users/80860/kennebec - stackoverflow
    var browser = get_browser_info();
    //alert(browser.name + browser.version);

    if (browser.name.toString() == "Chrome"){
        alert("Chrome!")
        if (browser.version < 35){
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }
    if (browser.name.toString() == "IE"){
        if (browser.version < 10){
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }
    if (browser.name.toString() == "Firefox"){
        if (browser.version < 31){
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }
    if (browser.name.toString() == "Safari"){
        if (browser.version < 7) {
            window.location.replace("http://people.cs.uct.ac.za/~dbseug001/res/pages/browserWarning.html");
        }
    }





    //var ieVer = getInternetExplorerVersion();
    //if (ieVer >= 10){
    //    $("#teamModal").removeClass("modal-fixed-footer");
    //    $("#supModal").removeClass("modal-fixed-footer");
    //}
    //if (ieVer > 0 && ieVer < 12){
    //
    //}
})

