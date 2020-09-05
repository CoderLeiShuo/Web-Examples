/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-09-05 16:28:58
 * @LastEditTime: 2020-09-05 21:38:49
 * @LastEditos: CoderLeiShuo
 */
// querySelectorAll()返回一个数组
// 对数组中的每个元素执行forEach()方法
document.querySelectorAll('a').forEach(elem => {
    elem.onmouseenter =
        elem.onmouseleave = e => {
            // tolerance：容差
            // 由于clientWidth获取的是padding-box的宽度
            // 这里设置容差为5，将边框宽度计入容差范围内
            const tolerance = 5;

            const left = 0;
            // clientWidth：padding-box的宽度
            const right = elem.clientWidth;

            // pageX：当前事件中鼠标的x坐标
            // offsetLeft：当前元素相对于父元素的偏移值（border-box）
            // 定义x为变换中心点
            // x值如果为正，则说明鼠标从元素右侧进入
            // x值如果为负，则说明鼠标从元素左侧进入
            let x = e.pageX - elem.offsetLeft;

            if (x - tolerance < left) {
                // 如果x的值减去除去容差后，还小于左侧left的值
                // 将变换点设置在元素左侧边界
                x = left;
            }
            if (x + tolerance > right) {
                x = right;
            }

            // setProperty(propertyName,value,priority)：为元素设置样式
            elem.style.setProperty('--x', `{x}px`);
        };
});