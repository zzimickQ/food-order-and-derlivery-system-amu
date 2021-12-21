/**
 * Created by KASSAHUN on 5/23/2018.
 */


function elem(elemtype, val, attr) {
    var v = document.createElement(elemtype);
    v.innerHTML = val;
    if(attr != undefined) {
        for(var att in attr) {
            v.setAttribute(att,attr[att]);
        }
    }
    return v;
}

function button(val, func, attrname, attdata) {
    var b = document.createElement('button');
    b.innerHTML = val;
    for(var i=0;i<attrname.length;i++) {
        b.setAttribute(attrname[i], attdata[i]);
        b.onclick = func;
    }


    return b;

}

function appending(container,to_be_added){
    var c = container.appendChild(to_be_added);
    return c;
}
function creating_and_appending(tagName,to_be_added){
    var c = document.createElement(tagName).appendChild(to_be_added);
    return c;
}
function setting_meal(status,time) {
    var ca = "";
    if(status==1)
        ca = "Available For "+time;
    else
        ca = "Not Available For "+time;
    return ca;

}
function orderOut() {
var out_id = this.getAttribute('out_id');
    console.log(out_id+"zdfxghj vh");
    var re = new XMLHttpRequest();
    re.onreadystatechange = function () {
        if(re.readyState === 4) {
            displayOrder();
        }
    };
    re.open('get','accessing orders.php?id='+out_id);
    re.send();
}
function toggle() {
    console.log(this);

    var meal_id = this.getAttribute('meal_id');
    var time = this.getAttribute('time');

    var re = new XMLHttpRequest();
    re.onreadystatechange = function () {
        if(re.readyState === 4) {
            display_menu();
        }
    };
    re.open('get','accessing meal.php?do=toggle-state&id='+meal_id+'&time='+time);
    re.send();

}
function create_table_data(v) {
    var row = document.createElement("tr");
    for(var col in v) {
        var val = v[col];
        row.appendChild(elem("td",val));
    }


    return row;

}
function create_detail(v,nam) {
    var t = document.createElement('table');
    t.appendChild(elem("th","Customer Detail About "+nam))
    for(var col in v) {
        var val = v[col];
        // console.log(val);
        var row = document.createElement("tr");
        var tabdat = document.createElement("td");
        tabdat.appendChild(elem("label",col+":"));
       row.appendChild(tabdat);
        row.appendChild(elem("td",val));
        t.appendChild(row);
    }
    return t;

}

function with_button(data,but,th,id) {
    var tab = document.createElement("table");

    var butAction;
    if (th!=null) {
        for (var i=0;i<th.length;i++) {
            var tabHe=document.createElement("th");
            tabHe.innerHTML=th[i];
            tab.appendChild(tabHe);
        }

    }
    for (var i=0;i<data.length;i++) {

        var tr = document.createElement("tr");
        tr.appendChild(elem("td",data[i].meal));
        tr.appendChild(elem("td",data[i].price));
        if (but!=null) {
            butAction=elem("button",but);
            butAction['data']=data[i];
            butAction.onclick=fun;
            tr.appendChild(butAction);
        }

        tab.appendChild(tr);
    }

    return tab;
}

var updateData = new FormData();

var editID=0;

function editCustomer() {
    dyn.innerHTML="";
    var reg_cust = document.getElementById('register-customer');
    editID = this.getAttribute('e-id');
    var sub = document.getElementsByName('submit')[0];
    sub.value="update";
    // console.log(id);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState == 4) {
            console.log(editID);
            var data = JSON.parse(request.responseText);
            console.log(data);
            var s = data[0];




            dyn.appendChild(reg_cust.cloneNode(true));
            var name = document.getElementsByName('name')[0];
            var school_id = document.getElementsByName('school_id')[0];
            var dep = document.getElementsByName('department')[0];
            var phon = document.getElementsByName('phone_num')[0];
            var credit = document.getElementsByName('credit')[0];
            var username = document.getElementsByName('username')[0];
            var password = document.getElementsByName('password')[0];

            name.value=s['Customer Name'];
            school_id.value=['Campus ID'];
            dep.value=['Department'];
            phon.value=['Phone number'];
            credit.value=['Credit'];
            username.value=['Username'];
            password.value=['Password'];


        }
    };
    request.open('get', "accessing customer.php?id="+editID);
    request.send();






}

function submit_change() {
    var name = document.getElementsByName('name')[0].value;
    var school_id = document.getElementsByName('school_id')[0].value;
    var dep = document.getElementsByName('department')[0].value;
    var phon = document.getElementsByName('phone_num')[0].value;
    var credit = document.getElementsByName('credit')[0].value;
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    updateData.append('name',name);
    updateData.append('school_id',school_id);
    updateData.append('department',dep);
    updateData.append('phone_number',phon);
    updateData.append('credit',credit);
    updateData.append('username',username);
    updateData.append('password',password);
    updateData.append('id',editID);
    req('update customer.php', updateData, function (anything) {
        alert("Update complete");
        customerDisplay();
    });
}

function req(url,data,fun) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState == 4){
            fun(request.responseText);
        }
    };
    request.open('post', url);
    request.send(data);
}

function submit_register(form) {

    var name = document.getElementsByName('name')[0].value;
    var school_id = document.getElementsByName('school_id')[0].value;
    var dep = document.getElementsByName('department')[0].value;
    var phon = document.getElementsByName('phone_num')[0].value;
    var credit = document.getElementsByName('credit')[0].value;
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var postData = new FormData();
    postData.append('name',name);
    postData.append('school_id',school_id);
    postData.append('department',dep);
    postData.append('phone_number',phon);
    postData.append('credit',credit);
    postData.append('username',username);
    postData.append('password',password);
    req('register.php', postData, function (anything) {
        alert("register complete");
        customerDisplay();
    });

}

function displa_message(message) {
    var box = document.getElementById('message-box');

}

function submit_meal(form) {
    var meal = document.getElementsByName('meal')[0].value;
    var price = document.getElementsByName('price')[0].value;
    var breakfast = document.getElementsByName('Breakfast')[0].checked;
    var lunch = document.getElementsByName('Lunch')[0].checked;
    var dinner = document.getElementsByName('Dinner')[0].checked;

    if(meal.trim()!='' && price.isNaN()!=false && price.trim()!='' ) {
        console.log("Meal regi");
        if(breakfast == true || lunch == true || dinner == true ) {

            var postData = new FormData();
            postData.append('meal', meal);
            postData.append('price', price);
            postData.append('breakfast', breakfast);
            postData.append('lunch', lunch);
            postData.append('dinner', dinner);
            console.log(postData);
            req('register meal.php', postData, function (anything) {
                alert("register complete");
                customerDisplay();
            });
        } else {
            alert("at least one of the time is required");
        }
    } else {
            alert("fill in all values");
    }
}
var totalPrice = 0;
var div = document.createElement("div");
var tb = document.createElement("table");
tb.appendChild(elem("th","Meal"));
tb.appendChild(elem("th","Price"));
function fun(eve) {
    var OrderBut = document.createElement("button");
    OrderBut.innerHTML="Place Order";
    OrderBut.action=sendQuery;
    console.log('funny');
    var d = this.data;
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.append(d.meal);
    tr.appendChild(td);
    td = document.createElement("td");
    td.append(d.price);
    tr.appendChild(td);
    tb.appendChild(tr);
    div.appendChild(tb);
    totalPrice=totalPrice+parseFloat(d.price);
    var label = document.createElement("label");
    var p = document.getElementById('p');
    p.innerHTML = ("Total Price = "+totalPrice);
    label.appendChild(p);
    p.appendChild(OrderBut);
    div.appendChild(label);
    dyn.appendChild(div);

}
function sendQuery() {
    req("accessing meal.php",totalPrice,function (anything) {

    })

}
