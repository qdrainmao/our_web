/**
 * Created by jinyu on 2016/11/12.
 */
    //01.  ad-rooling by jquery
$(function(){var Len=$(".indexList > li").length;
var index=0;
var adTimer;
//按钮事件
$(".indexList>li").mouseover(function(){
    index=$(".indexList>li").index(this);
    showImg(index);
})/*.eq(0).mouseover()*/;
//滑入停止动画，滑出开始动画.
adTimer=setInterval(function(){
    showImg(index)
    index++;
    if(index == Len){
        index = 0
    }
},2000);
$(".imglist01").hover(
    function(){
        clearInterval(adTimer)},
    function(){
        adTimer=setInterval(function(){
            showImg(index);
            index++;
            if(index == Len){
                index = 0
            }
        },2000);
    }
)/*.trigger("mouseleave")*/;
function showImg(abc) {
    var adLeft = $(".imglist01 li:first").width();
    $(".imglist02").stop(true, false).animate({
        "marginLeft": -adLeft * abc + "px"    //改变 marginTop 属性的值达到轮播的效果
    }, 1000)
    $(".indexList>li").removeClass("indexOn").eq(index).addClass("indexOn");}
})

