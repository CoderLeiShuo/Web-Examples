# 案例001——控制div属性

## 任务说明

### 要求

1. 在页面上要定义五个按钮，分别执行相应的功能。
2. 点击相应按钮，可以使得按钮下方的蓝色div方块做出相应变化。单击重置按钮可以恢复到初始状态。
3. div初始状态为`100px * 100px`，背景颜色为`deepskyblue`

### 最终实现的效果

如下图所示：

![image-20200602222442174](https://raw.githubusercontent.com/CoderLeiShuo/cloudimgs/master/imgs/20200602222442.png)

## 实现思路

### HTML部分

1. 分析页面结构可知，在页面上方是五个按钮，可以使用`input`元素来制作，改变其`type`值为`button`即可
2. 按钮下方是一个`div`方块，使用`div`元素制作即可
3. `input`元素是**行内元素**，不会独占一行，因此连续定义五个`input`即可
4. 为了统一管理五个`button`，我使用了类名为`btn-group`的`div`将它们包裹起来
5. `div`元素是一个**块级元素**，默认独占一行

因此，我写出了下面结构的代码：

```html
<!-- 略 -->
<body>
    <div class="btn-group">
        <input type="button" value="变宽">
        <input type="button" value="变高">
        <input type="button" value="变色">
        <input type="button" value="隐藏">
        <input type="button" value="重置">
    </div>
    <div id="div1"></div>
</body>
<!-- 略 -->
```

### CSS部分

1. 观察可知，按钮部分和下方的div都是居中对齐
2. 五个`button`按钮都是行内元素，且被包裹在一个类名为`btn-group`的`div`中，因此我通过对这个`div`设置`text-align`属性实现了这五个`button`居中对齐。
3. 下方的`div`块可以通过设置**左右外边距`margin:auto`**，浏览器将会自动计算出左右边距，并且它们是相等的，这样就实现了**块级元素的居中对齐**。

因此，我写出了下面的代码：

```css
<style>
    .btn-group {
        text-align: center;
    }

    #div1 {
        width: 100px;
        height: 100px;
        margin: 10px auto;
        background-color: deepskyblue;
    }
</style>
```

### JavaScript部分

#### 封装设置样式的函数

1. 通过[JavaScript操作CSS](https://www.google.com/search?q=javaScript%E6%93%8D%E4%BD%9CCSS&amp;oq=javaScript%E6%93%8D%E4%BD%9CCSS&amp;aqs=chrome..69i57j35i39l2j0l5.5400j0j7&amp;sourceid=chrome&amp;ie=UTF-8)的方法有很多种。比如，可以直接为元素添加内联样式。

   ```js
   var div1 = document.getElementById("div1");
   // 这里是添加内联样式的关键
   div1.style.background = "red";
   ```

5.  上述的代码不失为一种可用的方法，但是我们需要通过五个按钮设置五种样式，而且每一个要设置的属性不相同，重复5次类似上述的代码显示不可。寻找规律，可以封装成一个函数：

   ```js
   function changeStyle(elem, attr, value) {
       elem.style[attr] = value;
   }
   ```

#### 为按钮绑定单击事件

1. 首先要获取五个button，分别为它们绑定事件。如果为它们分别设置一个`id`，通过`id`获取每一个`button`就会很麻烦。因此，这里采用了`getElementByTagName`方法。

2. `Element.getElementsByTagName()` 方法返回一个动态的包含所有指定标签名的元素的HTML集合[`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)。指定的元素的子树会被搜索，不包括元素自己。

3.  在HTML部分我们为五个`button`的父元素设置了类名，因此，这里可以通过`getElementsByTagName()`方法获取到这个元素下的子元素（五个`button`按钮）

4. 于是，可以写出下面的代码：

   ```js
   window.onload = function(){
       // 传入标签名，即可获取该元素下的子元素
       var oBtn = document.getElementsByTagName("input");
       var div1 = document.getElementById("div1"); 
       for(var i =0; i < oBtn.length; i++) {
           // 这里可能还需要一些代码
           
           // 为每个按钮绑定单击事件    
           oBtn.[i].onclick = function(){
               // 当某个按钮被点击时，调用changeStyle函数
               // 这个函数中还需要传入一些参数
               changeStyle()
           }
       }
   }
   ```

5. 五个按钮，对应五种操作，就会有五种属性名和五种属性值，我们可以利用数组来存储属性名和属性值，刚好在循环中，动态改变样式。

6. 于是，继续完善代码：

   ```js
   window.onload = function(){
       var oBtn = document.getElementsByTagName("input");
       var div1 = document.getElementById("div1"); 
       // 属性名和属性值数组
       var oAttr = ["width", "height", "background", "display", "display"];
       var oVal = ["200px", "200px", "red", "none", "block"];
       for(var i =0; i < oBtn.length; i++) {
           // 这里可能还需要一些代码
              
           oBtn.[i].onclick = function(){
               // 这个函数中传入所需要的参数
               changeStyle(oDiv,oAttr[i],oVal[i]);
           }
       }
   }
   ```

## 疑难解答

### 设置样式



### 在循环内绑定单击事件