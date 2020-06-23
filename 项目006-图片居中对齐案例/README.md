# 案例006-图片(自动)居中对齐案例

## 任务说明

### 要求：

```js
<body>
    <div class="box">
        <img src="http://res.xyq.netease.com/pc/zt/20151119153357/images/top_aec1ab4.jpg" alt="">
    </div>
</body>
```

如下图所示，当调整浏览器宽度时，图片没有居中显示中间的内容。

![image-20200623170208673](C:\Users\conan\AppData\Roaming\Typora\typora-user-images\image-20200623170208673.png)

通过设置CSS样式，实现图片居中对齐，并且保证调整浏览器宽度时，图片仍能保证居中对齐。

### 素材图片：

![](http://res.xyq.netease.com/pc/zt/20151119153357/images/top_aec1ab4.jpg)

## 实现思路

### 方法一：设置为背景

```html
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        
        .box1 {
            height: 400px;
            min-width: 1000px;
            background-image: url("./images/top_aec1ab4.jpg");
            /* 设置背景图片的水平位置为居中 */
            background-position: center -81px;
        }
    </style>
</head>
<body>
	<div class="box1">
        
    </div>
</body>
```



### 方法二：相对定位结合平移

