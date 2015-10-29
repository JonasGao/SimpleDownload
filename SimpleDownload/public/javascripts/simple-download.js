/**
 * 简单下载工具，通过 form 封装 post 请求下载文件
 */

(function ($) {
    
    if (!$) throw 'require jQery';

    $.download = {
        'post': function (url, param) {
            
            var newId = "DOWN" + Math.random().toString().substr(2, 5)

            var $frame = $('<iframe>').attr({
                id: newId,
                name: newId,
                style: 'display:none'
            });

            var $form = $('<form>').attr({
                action: url,
                method: 'POST',
                style: 'display:none',
                target: newId
            });

            var $hiddens = $.map(param, function (val, name) {
                return $('<input type="hidden">').attr({
                    id: name,
                    name: name,
                    value: val
                });
            });
            
            $('body').append( $form.append($hiddens), $frame );
            
            $frame.contents()[0].onload = function () {
                alert('down load~');
            };

            $form.submit();
        },
        'get': function (url, param) {

        }
    };

})(jQuery);