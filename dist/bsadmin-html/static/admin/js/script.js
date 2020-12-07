

$(document).ready(function() {


    $('.menu .top-menu').click(function () {

        let pa = $(this).parent();

        if(pa.hasClass('unwind')){
            pa.removeClass('unwind');
        }else{
            pa.addClass('unwind');
        }


    })
    //删除
    $(".del").click(function () {
        var url = $(this).attr("href");
        var id = $(this).attr("data-id");

        layer.confirm('你确定要删除么?', {
            btn: ['确定', '取消']
        }, function () {
            $.get(url, function (data) {
                if (data.code == 1) {
                    $(id).fadeOut();
                    layer.msg(data.msg, {icon: 1});
                } else {
                    layer.msg(data.msg, {icon: 2});
                }
            });
        }, function () {
            layer.msg("您取消了删除!");
        });
        return false;
    });
})

function delCache(){
    sessionStorage.clear();
    localStorage.clear();
}

function msg(code=1,msg='',url='',s=3) {
    if(typeof code == 'object') {
        msg = code.msg;
        url = code.url || '';
        s = code.s || 3;
        code = code.code;
    }
    code = code==1 ? 1 : 2;
    layer.msg(msg, {icon: code,offset: config.layerMsg.offset || 't',shade: config.layerMsg.shade || [0.4, '#000']});
    if(url){
        setTimeout(function () {
            window.location.href = url;
       },s*1000);
    }
}


//百度统计,使用时请去掉
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2b45cf3bb7ac4664bb612c10feebf85d";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();





