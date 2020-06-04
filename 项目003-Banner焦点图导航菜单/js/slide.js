/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-06-04 11:42:25
 * @LastEditTime: 2020-06-04 16:36:44
 * @LastEditos: CoderLeiShuo
 */
/**
 * @description: 获取指定id的元素对象
 * @param {string} id 
 * @return: 元素对象
 */
function byId(id) {
    return typeof id === "string" ? document.getElementById(id) : id;
}

var timer = null,
    index = 0,
    dots = byId("dots"),
    dots = byId("dots").getElementsByTagName("span"),
    pics = byId("banner").getElementsByTagName("div"),
    prev = byId("prev"),
    next = byId("next"),
    menu = byId("menu-content"),
    subMenu = byId("sub-menu"),
    innerBox = subMenu.getElementsByClassName("inner-box"),
    menuItems = menu.getElementsByClassName("menu-item"),
    // 图片数量
    len = pics.length;


function slideImg() {
    // console.log("执行slideImg函数");
    var main = byId("main");
    main.onmouseover = function () {
        // 清除定时器
        if (timer) {
            clearInterval(timer);
        }
    }
    main.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= len) {
                index = 0;
            }
            changeImg();
        }, 4000);
    }
    main.onmouseout();

    for (var d = 0; d < len; d++) {
        dots[d].id = d;
        dots[d].onclick = function () {
            index = this.id;
            changeImg();
        }
    }
}
slideImg();

function changeImg() {
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    console.log(index);
    pics[index].style.display = "block";
    console.log()
    // 设置类名
    dots[index].className = "active";
}




// 上一张
prev.onclick = function () {
    index--;
    if (index < 0) {
        index = len - 1;
    }
    changeImg();
}

// 下一张
next.onclick = function () {
    console.log("下一张");
    index++;
    if (index >= len) {
        index = 0;
    }
    changeImg();
}