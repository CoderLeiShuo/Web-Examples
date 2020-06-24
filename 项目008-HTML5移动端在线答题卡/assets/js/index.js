/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-06-24 09:34:07
 * @LastEditTime: 2020-06-24 10:16:11
 * @LastEditos: CoderLeiShuo
 */


 
/**
 * @description: 显示题目
 * @param {type} 
 * @return: 
 */
function Questions() {
    for (var i in data) {
        console.log(data[i]);
        var div = document.createElement("div");
        div.className = "entrance-bottom-frame-line";
        document.querySelector(".entrance-bottom-frame").appendChild(div);

        var div2 = document.createElement("div");
        div2.className = "entrance-bottom-frame-line-title";
        div2.innerHTML = data[i]
    }
}


// 为何此处为undefined?
// 难道data不是一个数组吗？
// 下边使用了var声明了data
// 变量声明会被提升，而赋值不会
// 因此，提升后的data此时的值为undefined
console.log(typeof data);

var data = [{
    "id": "1",
    "title": "1. 众所周知我们所处的宇宙的质能公式是E=mc2，其中c是真空中的光速，和我们的宇宙平行的另一个宇宙meta，研究显示他们使用的质能公式是E=(2+√3)m，当一个物体质量m很大的时候，对应的能量E非常大，数据也非常的长，但meta宇宙里面的智慧生物只愿意把E取整，然后记录对应的能量E的最后一位整数，比如m=0时，他们会记录1，m=1时，他们会记录3。m=2的时候，他们会记录3。现在请问当m=100时，他们会记录多少？",

    "answer": [
        "String",
        "int",
        "char",
        "void",
    ]

}, {
    "id": "2",
    "title": "编译和运行下面代码时显示的结果是（）",

    "answer": [
        "打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
        "ClassCastException",
        "FileNotFoundException",
        "IndexOutOfBoundsException",
    ]
}, {
    "id": "3",
    "title": "编译和运行下面代码时显示的结果是（）",

    "answer": [
        "打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
        "ClassCastException",
        "FileNotFoundException",
        "IndexOutOfBoundsException",
    ]
}, {
    "id": "4",
    "title": "编译和运行下面代码时显示的结果是（）",

    "answer": [
        "打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
        "ClassCastException",
        "FileNotFoundException",
        "IndexOutOfBoundsException",
    ]
}, {
    "id": "5",
    "title": "编译和运行下面代码时显示的结果是（）",

    "answer": [
        "打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
        "ClassCastException",
        "FileNotFoundException",
        "IndexOutOfBoundsException",
    ]
}];


