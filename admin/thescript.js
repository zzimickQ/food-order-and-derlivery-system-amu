var dyn = document.getElementById("dynamic");
var div=document.createElement("div");
function detail() {
    div.innerHTML="";
    var id = this.getAttribute('pID');
    var na = this.getAttribute('custNam');
    console.log(na);
    console.log(id);
    var res = new XMLHttpRequest();
    var tab = document.createElement("table");
    if (tab) {
        tab.remove();
    }
    res.onreadystatechange = function () {
        if(res.readyState==4){
            var data = JSON.parse(res.responseText);
            div.appendChild(create_detail(data[0],na));

        }
    }
    dyn.appendChild(div);
    res.open('get',"accessing customer.php?id="+id);
    res.send();
}
function customerDisplay() {
    dyn.innerHTML = "";
    dyn.appendChild(elem("h2","Customer List"));
    var request =new XMLHttpRequest();
    var ta = document.createElement("table");

    request.onreadystatechange = function () {

        if ( request.readyState==4) {
            var datas = JSON.parse(request.responseText);
            console.log();
            for (var a=0; a<datas.length;a++) {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var lab = document.createElement("label");
                lab.appendChild(elem('td', datas[a].name));
                tr.appendChild(lab);
                td = document.createElement("td");
                td.appendChild(button('ዝርዝር መረጃ', detail, ['pID','custnam'], [datas[a].cust_id,datas[a].name]));
                tr.appendChild(td);
                td = document.createElement("td");
                td.appendChild(button('ምግብ እዘዝ',orderMeal,['o-id'],[datas[a].cust_id]));
                tr.appendChild(td);
                td = document.createElement("td");
                td.appendChild(button('ደንበኛዉን ሰርዝ', deleteCustomer, ['d-id'],[datas[a].cust_id]));
                tr.appendChild(td);
                td = document.createElement("td");
                td.appendChild(button('ደንበኛዉን አስተካክል', editCustomer, ['e-id'],[datas[a].cust_id]));
                tr.appendChild(td);
                ta.appendChild(tr);
            }
            dyn.appendChild(ta);
        }
    };
    request.open('get','accessing customer.php');
    request.send();
//        document.body.appendChild(dyn)
}
function customerDescription() {
    dyn.innerHTML = "";
    dyn.appendChild(elem("h2","Customer List With Description"));
    var request =new XMLHttpRequest();
    var ta = document.createElement("table");
    ta.appendChild(elem("th","Customer ID"));
    ta.appendChild(elem("th","Name"));
    ta.appendChild(elem("th","School ID"));
    ta.appendChild(elem("th","Department"));
    ta.appendChild(elem("th","Phone Number"));
    ta.appendChild(elem("th","Credit"));
    ta.appendChild(elem("th","Username"));
    ta.appendChild(elem("th","Password"));
    ta.appendChild(elem("th","Registered Date"));
    request.onreadystatechange = function () {
        if ( request.readyState==4) {
            var datas = JSON.parse(request.responseText);
            for (var a=0; a<datas.length;a++) {
                tr = create_table_data(datas[a]);
                ta.appendChild(tr);
            }
            dyn.appendChild(ta);
        }
    };
    request.open('get','accessing customer.php');
    request.send();
}

function deleteCustomer() {
    var id = this.getAttribute('d-id');
    console.log(id);
    var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState==4) {
            customerDisplay()
            console.log(request.responseText);
        }
    };
    request.open("get","delete customer.php?id="+id);
    request.send();
}
function orderMeal() {
    div.innerHTML="";
    var id = this.getAttribute('o-id');
    var tab = "";
    var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState==4) {
            var data = JSON.parse(request.responseText);
            var row="";
            console.log(data);
            // for (var i=0; i<data.length;i++) {
                tab= with_button(data,"Select",['Meal','Price'],id);

                div.appendChild(tab);
            dyn.appendChild(div);
            // }

        }
    };
    request.open("get","accessing meal.php?");
    request.send();
}
function displayOrder(){
    dyn.innerHTML="";
    dyn.appendChild(elem("h2","Orders in Sequence"));
    var res = new XMLHttpRequest();
    var tab = document.createElement("table");

    appending(tab,elem("th","Ordered By"));
    appending(tab,elem("th","Meal"));
    appending(tab,elem("th","Ordered Time"));
    appending(tab,elem("th","Status"));
    res.onreadystatechange = function () {
        if (res.readyState==4) {
            var data = JSON.parse(res.responseText);
            for (var i=0;i<data.length;i++) {
                console.log(data[i].meal);
                var tr = document.createElement("tr");
                var lab = document.createElement("label");
                appending(lab,elem("td",data[i].ordered_by));
                appending(tr,lab);
                appending(tr,elem("td",data[i].meal));
                appending(tr,elem("td",data[i].time));
                if (data[i].out==0) {
                    var btn = document.createElement("button");
                    btn.innerHTML="Out",{out_id:data[i].order_id};
                    btn.onclick=orderOut;
                    appending(tr,btn);
                }
                else{
                    appending(tr,elem("label","Done"));
                }

                appending(tab,tr);
            }
        }
        appending(dyn,tab);
    }
    res.open('get',"orders.php");
    res.send();
}
function display_menu() {
    dyn.innerHTML="";
    dyn.appendChild(elem("h2","Meal Editor"));
    var res = new XMLHttpRequest();
    var tab = document.createElement("table");

    appending(tab,elem("th","Meal"));
    appending(tab,elem("th","breakfast"));
    appending(tab,elem("th","lunch"));
    appending(tab,elem("th","dinner"));
    res.onreadystatechange = function () {
        if (res.readyState==4) {
            var data = JSON.parse(res.responseText);
            for (var i=0;i<data.length;i++) {
                console.log(data[i].meal);
                var tr = document.createElement("tr");
                appending(tr,elem("td",data[i].meal));
                var td = elem("td",setting_meal(data[i].breakfast,"Breakfast "), {meal_id: data[i].meal_id, time: 'breakfast'});
                td.onclick = toggle;
                appending(tr,td);
                var td = elem("td",setting_meal(data[i].lunch,"Lunch"), {meal_id: data[i].meal_id, time: 'lunch'});
                td.onclick = toggle;
                appending(tr,td);
                var td = elem("td",setting_meal(data[i].dinner,"Dinner "), {meal_id: data[i].meal_id, time: 'dinner'});
                td.onclick = toggle;
                appending(tr,td);
                appending(tab,tr);
                console.log(data.meal);
            }
        }
        appending(dyn,tab);
    }
    res.open('get',"accessing meal.php");
    res.send();
}
function customerRegistration(){
    dyn.innerHTML="";
    dyn.appendChild(elem("h2","Customer Registration"));

    var reg_cust = document.getElementById('register-customer');

    dyn.appendChild(reg_cust.cloneNode(true));

}
function mealRegistration() {
    dyn.innerHTML="";
    dyn.appendChild(elem("h2","Meal Registration"));
    var reg_meal=document.getElementById('register-meal');
    dyn.appendChild(reg_meal.cloneNode(true));

}
function menuList() {
    dyn.innerHTML="";
    dyn.appendChild(elem("h2","Menu List"));
    var req = new XMLHttpRequest();
    var tab = "";
    req.onreadystatechange = function () {
        if (req.readyState==4) {
            console.log(req.responseText);
            var data = JSON.parse(req.responseText);
            console.log(data);
            // for (var i=0; i<data.length;i++) {
                 tab= with_button(data,null,['Meal','Price']);
                dyn.appendChild(tab);
            // }

        }
    }
    req.open("get","update money.php");
    req.send();
}
customerDisplay();