$(function () {
    var routings = {

        login: {
            page: 'login',

        },

        users: {
            page: 'view_users',
            list: {page: 'view_users'},
            one: {page: 'view_user'}
        },

        customers: {
            page: 'view_customers',
            action: function () {
                $.jsonAjax({});
            },
            list: {
                page: 'view_customers',
                action: function () {
                    $.jsonAjax({});
                }
            },
            one: {
                page: 'view_customer',
                action: function () {
                    $.jsonAjax({});
                }
            }
        }


    };

    // changes url function
    $.changeUrl = function (url) {
        window.history.pushState({
            urlPath: url
        }, "", url);
        $.processUrl();
    };

    // process url from url
    $.processUrl = function () {
        url = (window.location.pathname.split('/')).filter(function (w) {
            return w.trim().length > 0;
        });
        // var a = $("#" + url[0]);
        // if (url.length < 1 || a.length < 1) {
        //     console.warn("Link Not Found", url);
        //     return $.changeUrl('/login');
        // }
        console.log(url);
        if (url[0] == "login") {

            $(".main-container-fuck").load("/views/" + url[0] + '.html');
            $(".main-container").html('');

        }
        else {
            $(".main-container").load("/views/" + url[0] + '.html');
            $(".main-container-fuck").html('');
        }
        // var sc = a.find('script');
        // sc.detach();
        // console.log(sc);
        // a.append(sc);
        // $(".main-container").html(a.html());
    };

    // does a basic url
    $.processUrl();

    $('body').on('click', 'a', function (ev) {
        try {
            $.changeUrl($(this).attr('href'));
            // console.log('redirecting to ', $(this).attr('href'));
        } finally {
            ev.preventDefault();
            return false;
        }

    });


    $.getUrlData = function () {
        return window.location.pathname.split('/').filter(function (ns) {
            return ns.length > 0
        }).pop();
    };

});