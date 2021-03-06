# 纯`CSS`实现星星评级特效

## 任务说明

### 要求

1. 在页面上有5个黄色空心星星，代表**1星**到**5星**的等级；
2. 当鼠标经过某个星星时，该星星和它之前的星星都要变成黄色实心星星；
3. 当鼠标向后移动一个星星的位置时，增加一颗实心星星黄色；
4. 当鼠标向前移动一个星星的位置时，减小一颗实心星星黄色；
5. 当鼠标移到星星外时，所有的星星都变为空心
6. 当单击某个星星时，该星星和它之前的星星都变成黄色实心星星，除非下次单击，否则，即使鼠标移开，这些星星依旧是实心。

### 成品展示

最终要实现的效果如下：

![2020-8-17-15-19-42](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200910215749.gif)

## 实现思路

### 利用图标字体创建五角星

#### 创建空心五角星

先来根据第一条要求进行分析，页面上需要有5颗黄色的空心星星，在这里我们使用是图标字体，需要引入下面的`CSS`文件

```html
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css'>
```

引入以后，只需要给元素设置类名即可。对于图标元素，我们一般都是使用`<i>`元素来表示。因此，要创建出一个空心的星星，只需要这样做：

```html
<i class=icon ion-md-star-outline></i>
```

可以为这个元素设置一些样式，然后，金黄色的空心星星就呈现出来了。

![image-20200910221529702](https://picgo-ali.oss-cn-beijing.aliyuncs.com/img/20200910221529.png)

#### 创建实心五角星

















### `HTML`部分







### `CSS`部分

