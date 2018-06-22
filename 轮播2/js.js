window.onload = function () {
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic'),
        images = pic.getElementsByTagName("li"),//获取标签
        list = document.getElementById('list').getElementsByTagName('li'),


        index = 0,
        timer = null;//定时器变量

    // 定义并调用自动播放函数
    function autoPlay() {
        index++;
        if (index >= list.length) {
            index = 0;
        }
        changeImage(index);
    }

    // 定义图片切换函数
    function changeImage(curIndex) {
        for (var j = 0; j < list.length; j++) {
            list[j].className = '';
            images[j].style.display = 'none';
        }
        // 高亮显示当前页签
        list[curIndex].className = 'on';
        images[curIndex].style.display = 'block';
        index = curIndex; //这是为了预防 onmouseover-out- 之后不能正确调到下一个的措施
    }

    // 遍历所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < list.length; i++) {
        list[i].id = +i;
        list[i].onmouseover = function () {
            changeImage(this.id);
            clearInterval(timer);
        }
    }
    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function () {
        clearInterval(timer);
    };
    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function () {
        //changeImage(index++);
        timer = setInterval(autoPlay, 500);
    };


    // 添加定时器，改变当前高亮的索引
    timer = setInterval(autoPlay, 2000);
};
/**
 * Created by Wang on 2017/5/27.
 */
