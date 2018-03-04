/*
* @Author: Marte
* @Date:   2018-02-25 12:09:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-04 19:35:00
*/

'use strict';
//var boarddiv = "<div style='background:red;width:100px;height:100px;z-index:999;position:absolute;top:0;'>555</div>";
function create()
{
    for (var i = 1; i <=63; i++) {
            // 这里指定 id = "div" + i，对应为 div1 div2 div3
            var id = "div" + i;
            var div = $("<div class =aa id='" + id + "'><div class=row><div class= col-md-6 >" + id +"</div> <div class= col-md-6>" + id +"</div><div class= col-md-1 ></div><div class=col-md-10 ><p>" + id +"中华fgjhghjgjghjgdsa共和国</p></div><div class= col-md-6 >" + id +"</div><div class= col-md-6 >" + id +"</div></div></div>");
            $("#ddd").append(div);// body 拼接一个 div
            $(".col-md-10").height(70);

        }
}








$(document).ready(function($) {
create();
$(".aa").click(function(){
    $(this).css("background","green");

    $("div").remove(".aa");

    create();
  });
});

