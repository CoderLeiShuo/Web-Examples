/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-06-04 11:42:25
 * @LastEditTime: 2020-06-04 18:37:43
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
        },4000);
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


/**
 * @description: 根据index值切换图片
 * @param {type} 
 * @return: 
 */
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

// 遍历主菜单，绑定事件
for (var m = 0; m < menuItems.length; m++) {
    // 为每个主菜单添加data-index属性作用索引
    menuItems[m].setAttribute("data-index", m);

    // 鼠标移入主菜单时
    menuItems[m].onmouseover = function () {
        subMenu.className = "sub-menu";
        var indey = this.getAttribute("data-index");
        // 遍历子菜单，隐藏所有子菜单
        for (var j = 0; j < innerBox.length; j++) {
            innerBox[j].style.display = "none";
            menuItems[j].style.background = "none";
        }
        menuItems[indey].style.background = "rgba(0,0,0,.1)";
        innerBox[indey].style.display = "block";
    }
}

menu.onmouseout = function () {
    subMenu.className = "sub-menu hide";
}

subMenu.onmouseover = function () {
    console.log("移入子菜单");
    this.className = "sub-menu";
}

// 注意，此处之前绑定成了onmousemove事件
// 造成鼠标移入子菜单时，就隐藏的bug
// 我误以为是主菜单和子菜单没有衔接好，才造成移出主菜单，子菜单就消失的现象
subMenu.onmouseout = function () {
    console.log("移出子菜单");
    this.className = "sub-menu hide";
}