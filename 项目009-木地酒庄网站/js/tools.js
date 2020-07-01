/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-06-29 11:22:37
 * @LastEditTime: 2020-06-29 16:34:54
 * @LastEditos: CoderLeiShuo
 */
/**
 * @description: 给指定对象obj添加类cls
 * @param {object} obj 待添加类名的元素对象 
 * @param {string} cls 待添加的类名 
 * @return: none
 */
function addClass(obj, cls) {
    // 获取类名
    var obj_class = obj.className;
    // 根据原类名是否为空判断是否在类名间添加空格
    var blank = obj.className || " ";
    obj.className = obj_class + black + cls;
}

/**
 * @description: 
 * @param {object} obj 待判断的元素对象
 * @param {string} cls 待判断的类名 
 * @return: 
 */
function hasClass(obj, cls) {
    var obj_class = obj.className;
    var obj_class_lst = obj_class.split("");
    for (var i = 0; i < obj_class_lst.length; i++) {
        if (cls == obj_class_lst[i]) {
            return i;
        }
    }
    return -1;
}


/**
 * @description: 移除指定对象obj的cls类
 * @param {object} obj 待移除类名的元素对象 
 * @param {string} cls 待移除的类名 
 * @return: 
 */
function removeClass(obj, cls) {
    // 获取元素对象的类名
    var obj_class = obj.className;
    if (obj_class != "") {
        // var = obj_class.split("");
        for (var i = 0; i < arrClassName.length; i++) {
            if (cls == arrClassName[i]) {
                
            }
        }
    }
}

