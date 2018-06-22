   // 轮播运动开始
    var MoveLeft = true;
    var timer = null;
    var TimerOut = null;
    var iSpeed = 3;
    /*暂停*/
     function stopMove() {
            clearInterval(timer);
            timer = null;
           
        }
    /*开始*/
    function startMove(bLeft) {
        MoveLeft = bLeft;
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(doMove, 30);
    }

   /*运动*/
    function doMove() {
        var oDiv = document.getElementById('roll');
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        var lf = oUl.offsetLeft;
        
        if (MoveLeft) {
            lf -= iSpeed;
            if (lf <= -oUl.offsetWidth / 2) {
                lf += oUl.offsetWidth / 2;
            }
        }
        else {
            lf += iSpeed;
            if (lf >= 0) {
                lf -= oUl.offsetWidth / 2;
            }
        }

        oUl.style.left = lf + 'px';
    }
// 轮播运动结束