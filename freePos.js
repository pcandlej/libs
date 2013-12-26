/**
 * @author pierre
 */
function FreePos (opts) {
    function move() {
        scrollTop = document.documentElement.scrollTop | document.body.scrollTop;
        orgTop = objAb.offset().top - scrollTop;
        orgLeft = objAb.offset().left;
        if ($.browser.version == '6.0') {
            0 > (+orgTop) ? objFx.show().css({position:'absolute',top:scrollTop,left:(+orgLeft)+'px'}) : objFx.hide();
        } else {
            0 > (+orgTop) ? objFx.show().css({position:'fixed',top:'0px',left:(+orgLeft)+'px'}) : objFx.hide();
        }
    }
    var objAb = opts.objAb,
        objFx = opts.objFx,
        scrollTop = 0,
        orgTop = 0,
        orgLeft = 0;
    $(window).resize(function() {
        move();
    });
    $(window).scroll(function() {
        move();
    });
}
 
$(function() {
    var g = new FreePos({
        objAb : $('#bar4'),
        objFx : $('#bar3')
    });
});