/*
 * @Author: CoderLeiShuo
 * @Description: 用于适配浏览器
 * @version: 1.0.0
 * @Date: 2020-06-24 16:28:03
 * @LastEditTime: 2020-06-24 16:38:56
 * @LastEditos: CoderLeiShuo
 */

(function (doc, win, undefined) {
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in win ? "orientationchange" : "resize",
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            console.log (clientWidth);
            if (clientWidth === undefined) {
                return;
            }
            docEl.style.fontsize = 100 * (clientWidth / 750) + "px";
        }
    if (doc.addEventListener === undefined) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);