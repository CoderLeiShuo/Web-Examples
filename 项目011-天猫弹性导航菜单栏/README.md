# 项目011-`JavaScript`天猫弹性导航菜单栏

## 要求

1. 使用原生`JavaScript`制作天猫弹性导航菜单栏
2. 天猫图形的起始位置在第一个菜单选项
3. 当鼠标移动到其他菜单选项时，天猫图形也移动到该菜单选项，但需要有“弹性”效果，具体参考效果图
4. 当鼠标点击某一个菜单选项后，天猫图形的起始位置将发生变化，以该菜单选项为新的起始位置。

所需素材：

素材1:

![doubleOne](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807180004.png)

素材2:

![tMall](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807180023.png)

## 效果图

![16](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807175253.gif)

## 实现思路

### 制作页面

#### 制作页面基本结构

菜单我们一般都会使用`<li>`元素来制作，因此整个页面的结构我们不难写出：

参考代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS天猫弹性导航菜单栏</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div id="nav">
        <span id="t_mall"></span>
        <ul>
            <li>双11狂欢</li>
            <li>服装会场</li>
            <li>数码家电</li>
            <li>家具建材</li>
            <li>母婴童装</li>
            <li>手机会场</li>
            <li>美妆会场</li>
            <li>进口会场</li>
            <li>飞猪旅行</li>
        </ul>
    </div>
</body>
<script>
    
</script>

</html>
```

#### 设置`CSS`样式

在项目目录下新建一个`CSS`文件夹，在文件夹中新建一个`style.css`文件，用于书写`CSS`代码

##### 第1步. 清除默认样式

浏览器的默认样式一般不适用于我们的项目，所以一般我们第一步做的就是清除默认`CSS`样式。

不难写出如下代码:

```css
* {
    /* 清除默认内外边距 */
    margin: 0;
    padding: 0;
}

ul {
    /* 清除列表元素前的列表符号 */
    list-style: none;
}
```

##### 第2步：设置`body`元素样式

这里我们的`<body>`元素需要设置的样式非常简单，只有一个背景颜色，因此，可以写出下面的代码：

```css
body {
    background-color: pink;
}
```

##### 第3步：设置`div#nav`样式

分析一下，这个`nav`是一个**白色**的长条，有**宽度**和**高度** ，边角有较小的**圆角**效果，**距页面上方有一定距离**，在页面水平方向上呈**居中**对齐。

结合上述分析，可以写出如下代码：

```css
#nav {
    /* 上下外边距100px，左右居中对齐 */
    margin: 100px auto;
    /* 设置宽高 */
    width: 900px;
    height: 63px;
    /* 设置背景 */
    background: #fff;
    /* 设置圆角效果 */
    border-radius: 5px;
}
```

设置完这些以后，应该可以达到下面的效果：

![image-20200807182447139](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807182447.png)

还有一个问题，在`nav`右侧还有一个全球狂欢节图形，这个是通过背景设置的，因此，我们需要改写`background`属性

```css
background: url('../images/doubleOne.png') #fff;
```

![image-20200807182848096](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807182848.png)

这样设置以后，还没有结束。还需要对背景图像进行一些调整

- 图像不需要重复
- 图像在水平方向需要右对齐
- 图像在垂直方向需要居中对齐

```css
background: url('../images/doubleOne.png') no-repeat right center #fff;
```

![image-20200807183153768](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807183153.png)

##### 第4步：设置`li`元素样式

默认的`li`元素是块级元素，独占一行，你可以采用`display: inline-block`使这些`li`共处一行，且仍然可以设置宽度。

但是这种方法有一个非常明显的问题：[inline-block元素之间有间距]([https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-去除间距/))

![image-20200807184119836](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807184119.png)

如上图所示，虽然实现了`li`元素水平分布，但是每个元素之间有一个间距。因此，这里推荐使用浮动的方式，让元素左浮动，就可以消除`li`元素之间的间距。

如下图所示：

![image-20200807184542619](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807184542.png)

代码如下：

```css
#nav ul li {
    float: left;
    /* inline-block会出现元素间间距 */
    /* display: inline-block; */
    width: 88px;
    height: 63px;
    /* 设置73px，而非63px是为了配合红色天猫形状 */
    line-height: 73px;
    cursor: pointer;
    text-align: center;
    /* 方便观察，实际不需要 */
    /* outline: 1px solid red; */
}
```

##### 第5步：设置天猫形状样式

天猫形状是一张图片，如果想单纯地实现鼠标**进入**到某个菜单选项时，显示这个形状，我们可以把它设置为`li`元素的`background-image`。但是这样，只能控制它的显隐，不能做出来==弹性移动==的效果。

这里我们让它单独存在，从而实现==弹性移动==的效果。

`HTML`结构中，有一个`id`为`t_mall`的`<span>`元素，`<span`>元素是一个典型的行内元素，可以和其他元素共处一行。

把形状设置为`<span>`元素的背景，代码如下：

```css
#t_mall {
    background: url('../images/tMall.png');
}
```

但是在页面上是不会看到形状的，原因在于`<span>`元素是一个行内元素，其宽度和高度由内容撑开。由于`<span></span>`之间没有内容，因此不占据宽度，背景图像自然也不会显示。

那么我们添加一些内容，看一下：

![image-20200807190738564](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807190738.png)

这次可以看到`<span>`元素了，而网页布局已经受到了影响。我们不能通过这种方式来实现效果。我们可以通过定位来实现。使用哪种定位呢？

如果使用相对定位，那么它是相对于自身进行定位，元素没有内容，在页面上都看不到，相对于自身定位显然没有用。

因此，我们可以使用绝对定位，`<span>`元素的父元素是`div#nav`，我们可以为其父元素开启相对定位，`<span>`元素设置绝对定位，让其相对于其（定位不为static的）父元素进行定位，`<span>`元素就可以在白色区域随意移动。

并且由于把`<span>`元素写在了`<ul>`元素上方，当`<span>`元素脱离文档流后，会跑到白色区域上方，但仍旧处在`<ul>`元素下方。

```css
#t_mall {
    position: absolute;
    width: 88px;
    height: 63px;
    background: url('../images/tMall.png');
}
```

就这样，实现了所需效果。

![image-20200807191620333](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200807191620.png)

天猫形状的起始位置在第一个菜单选项下方。

### 实现图形跟随移动功能







### 缓冲动画

