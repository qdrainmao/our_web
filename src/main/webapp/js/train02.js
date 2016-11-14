/**
 * Created by jinyu on 2016/11/12.
 */
$(document).ready(function () {
    var curIndex = 0, //当前index
        imgArr = getElementsByClassName("imgList02")[0].getElementsByTagName("li"), //获取图片组
        imgLen = imgArr.length,
        indexArr = getElementsByClassName("indexList")[0].getElementsByTagName("li"); //获取控制index组
// 定时器自动变换2.5秒每次

    var autoChange = setInterval(function(){
        if(curIndex < imgLen -1){
            curIndex ++;
        }else{
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);
    },2500);
//清除定时器时候的重置定时器--封装
    function autoChangeAgain(){
        autoChange = setInterval(function(){
            if(curIndex < imgLen -1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        },2500);
    }
//调用添加事件处理
    addEvent();
//给左右箭头和右下角的图片index添加事件处理
    function addEvent(){
        for(var i=0;i<imgLen;i++){
            //闭包防止作用域内活动对象item的影响
            (function(i){
                //鼠标滑过则清除定时器，并作变换处理
                indexArr[i].onmouseover = function(){
                    clearTimeout(autoChange);
                    changeTo(i);
                    curIndex = i;
                };
                //鼠标滑出则重置定时器处理
                indexArr[i].onmouseout = function(){
                    autoChangeAgain();
                };
            })(i);
        }
        ;}
//左右切换处理函数
    function changeTo(num){
        //设置image
        var imgList = getElementsByClassName("imgList02")[0];
        goLeft(imgList,num*1000); //左移一定距离

        //设置image的控制下标 index
        var _curIndex = getElementsByClassName("indexOn")[0];
        removeClass(_curIndex,"indexOn");
        addClass(indexArr[num],"indexOn");
    }
//图片组相对原始左移dist px距离
    function goLeft(elem,dist){
        if(dist == 1000){ //第一次时设置left为0px 或者直接使用内嵌法 style="left:0;"
            elem.style.left = "0px";
        }
        var toLeft; //判断图片移动方向是否为左
        dist = dist + parseInt(elem.style.left); //图片组相对当前移动距离
        if(dist<0){
            toLeft = false;
            dist = Math.abs(dist);
        }else{
            toLeft = true;
        }
        for(var i=0;i<= dist/20;i++){ //这里设定缓慢移动，10阶每阶40px
            (function(_i){
                var pos = parseInt(elem.style.left); //获取当前left
                setTimeout(function(){
                    pos += (toLeft)? -(_i * 20) : (_i * 20); //根据toLeft值指定图片组位置改变
                    //console.log(pos);
                    elem.style.left = pos + "px";
                },_i * 25); //每阶间隔50毫秒
            })(i);
        }
    }
//通过class获取节点
    function getElementsByClassName(className){
        var classArr = [];
        var tags = document.getElementsByTagName('*');
        for(var item in tags){
            if(tags[item].nodeType == 1){
                if(tags[item].getAttribute('class') == className){
                    classArr.push(tags[item]);
                }
            }
        }
        return classArr; //返回
    }

// 判断obj是否有此class
    function hasClass(obj,cls){  //class位于单词边界
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
//给 obj添加class
    function addClass(obj,cls){
        if(!this.hasClass(obj,cls)){
            obj.className += cls;
        }
    }
//移除obj对应的class
    function removeClass(obj,cls){
        if(hasClass(obj,cls)){
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg,'');
        }
    }
    alert("hello");

})
