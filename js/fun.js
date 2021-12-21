$(function () {

    $.zeko = function (templ, it) {
         var iter = templ.replace(/if\{{2}(.*)\}{2}([^]*)\{{2}\/if\}{2}/m, function (substring, s1, s2) {
            s1 = s1.replace('&gt;','>');
            s1 = s1.replace('&lt;','<');

            with(it)
            {
                console.log(it);
                try {
                    if (eval(s1))
                        return $.zeko(s2, it);
                    else return '';
                } catch (e) {
                    console.log(e.message);
                    console.warn('Zeko Function Parse Error:', "'cant't evaluate \"" + s1 + "\"");
                }
            }
        });
        iter = iter
            .replace(/loop\{{2}(.*)\}{2}([^]*)\{{2}\/loop\}{2}/m, function (str, key, v2) {
                var list = "";
                for (var b in it[key]) {
                    list += $.zeko(v2, it[key][b]);
                }
                return list;
            });
        iter = iter.replace(/\{{2}(.*)\}{2}/g, function (str, key) {
            console.log(key);
            with (it) {
                try {
                    return eval(key);
                } catch (e) {

                    console.log(e.message);
                    console.warn('Zeko Function Parse Error:', "'cant't evaluate \"" + s1 + "\"");
                }
            }
        });
        return iter;
    };
    $.fn.zeko = function (it) {
        var p = this.parent();
        var iter = p.html()
            .replace(/if\{{2}(.*)\}{2}([^]*)\{{2}\/if\}{2}/, function (substring, s1, s2) {
                s1 = s1.replace('&gt;','>');
                s1 = s1.replace('&lt;','<');

                with(it)
                {
                    console.log(it);
                    try {
                        if (eval(s1))
                            return $.zeko(s2, it);
                        else return '';
                    } catch (e) {
                        console.log(e.message);
                        console.warn('Zeko Function Parse Error:', "'cant't evaluate \"" + s1 + "\"");
                    }
                }
            });
        iter = iter
            .replace(/loop\{{2}(.*)\}{2}([^]*)\{{2}\/loop\}{2}/, function (str, key, v2) {
                var list = "";
                for (var b in it[key]) {
                    list += $.zeko(v2, it[key][b]);
                }
                return list;
        });
        var c = $.zeko(iter, it);
        p.html(c);
        return p;
    };

    $.fn.qzeko = function (tmpl_sel, data) {
        var va = $(tmpl_sel).zeko(data).html();
        this.html(va);
        this.find(tmpl_sel).removeAttr('id');
    };

    var data = {
        blueberry: "Hawi Bogale",
        ages: 24,
        lists: [
            {'something': "Something else", special:true},
            {'something': "zomething 2", special:false},
            {'something': "Something else what so ever", special:false},
        ]
    };

    $("#disp").qzeko("#temp", data);

});