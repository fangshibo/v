/*
* @Author: Marte
* @Date:   2018-02-25 12:09:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-04 13:15:18
*/

'use strict';
//var boarddiv = "<div style='background:red;width:100px;height:100px;z-index:999;position:absolute;top:0;'>555</div>";


$(document).ready(function($) {
for (var i = 1; i <= 20; i++) {
            // 这里指定 id = "div" + i，对应为 div1 div2 div3
            var id = "div" + i;
            var div = $("<div class =aa id='" + id + " '><div class=row ><div class= col-md-6 >" + id +"</div> <div class= col-md-6>" + id +"</div><div class= col-md-1 ></div><div class=col-md-10 ><p>" + id +"中华人民共和国</p></div><div class= col-md-1 ></div></div>");
            $("body").append(div);// body 拼接一个 div

        }

});

