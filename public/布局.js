/**
 * Created by hubin-ds1 on 2016/5/6.
 */

//动态设置初始比例
var pixelRatio=1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale='+pixelRatio+',maximum-scale='+pixelRatio+',minimum-scale='+pixelRatio+'"/>');
//动态设置文字大小
// var html=document.documentElement;
var html=document.documentElement;
var pageWidth=html.getBoundingClientRect().width;
html.style.fontSize=pageWidth/16+"px";
