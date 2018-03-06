/*
* @Author: Marte
* @Date:   2018-02-25 12:09:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-06 11:37:51
*/

'use strict';

$(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
       modal: true,
      show: {
        effect: "blind",
        duration: 100
      },
      hide: {
        effect: "scale",
        duration: 1000
      }
    });

});
//var boarddiv = "<div style='background:red;width:100px;height:100px;z-index:999;position:absolute;top:0;'>555</div>";
function create(a,b,c,d,e,f)
{
    for (var i = 1; i <=f; i++) {
            // 这里指定 id = "div" + i，对应为 div1 div2 div3
            var id = a;
            var b=b;
            var c=c;
            var d=d;
            var e=e;
            var div = $("<div class =aa id='" + id + "'><div class=row><div class= col-md-6 >" + id +"</div> <div class= col-md-6>" + b +"</div><div class= col-md-1 ></div><div class=col-md-10 ><p>" + c +"中华fgjhghjgjghjgdsa共和国</p></div><div class= col-md-6 >" + d +"</div><div class= col-md-6 >" + e +"</div></div></div>");
            $("#ddd").append(div);// body 拼接一个 div
            $(".col-md-10").height(70);

        }
}






$(document).ready(function($) {
create("e","dd","qq","ss","dv",20);
$(".aa").click(function(){
    $(this).css("background","green");

      $( "#dialog" ).dialog(
            {autoOpen: true},
             {modal:true},

            {show:{effect:'drop', direction:'up'}},
            {hide:{effect:'bounce', direction:'down'}},

            {draggable:false},
            {resizable:false}
            );

      // $( "#dialog" ).dialog.show("effect": "scale","duration","1000");



    $("div").remove(".aa");


    create("w","","dd","kk","",30);
  });
});

