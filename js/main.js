$(function (a) {

    $.jsonAjax = function(ob) {
        $.extend(ob, {
            type: 'post',
            dataType: 'json',
            contentType: false,
            processData: false,
            url: '/back/' + ob.url
        });
        return $.ajax(ob);
    };

    $('body').on('click', 'tbody tr[href]', function () {
        var v = $(this).attr('href');
        $.changeUrl(v);
    });



    $.toast = function (messages,t) {
        if (t === undefined) t = 'warning';
        var bod = $("#short-message").tmpl({message: messages, type:t});
        console.log(bod);

        bod.hide();
        $('body').append(bod);
        bod.fadeIn(1000);
        setTimeout(function () {
            bod.fadeOut(1000).remove();
        }, 5000);
    }


});