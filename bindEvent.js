/**
 * Created by zhanglei on 16/3/7.
 */
$(document).ready(function(){
    //$("#clickMeButton").click(function(){
    //    alert("按钮被点击");
    //}) ;
    $("#clickMeButton").bind("click",clickHandler1);
    $("#clickMeButton").bind("click",clickHandler2);
    $("#clickMeButton").unbind("click");
});
function clickHandler1(){
    console.log("clickHandler1");
}
function clickHandler2(){
    console.log("clickHandler2");
}