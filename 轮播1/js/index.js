var count = 0;
var oPicUl = document.getElementsByTagName('ul')[0],
		 aLi = oPicUl.getElementsByTagName('li'),
		moveWidth = aLi[0].offsetWidth;

var oI = document.getElementsByTagName('i'),
	oILen = oI.length;

var oBtnleft = document.getElementsByClassName('btn-left')[0],
	oBtnright = document.getElementsByClassName('btn-right')[0],
	oBox = document.getElementsByTagName('div')[0];

var boolen = true;
var realPicNum = oPicUl.children.length;

//不定宽度

var str = oPicUl.innerHTML + oPicUl.innerHTML;
oPicUl.innerHTML = str;
oPicUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

// main
var timer = setInterval(autoMove,3000);
oBtnleft.onclick = function () {
	autoMove(-1);
}
oBtnright.onclick = function () {
	autoMove(1);
}
oBox.onmouseover = function () {
	clearInterval(timer);
}
oBox.onmouseout = function () {
	timer =setInterval(autoMove,3000)
}


// Circle
for (var i = 0; i < oILen; i ++) {
	oI[i].index=i;
	oI[i].onclick = function () {
			count = this.index;
			changeCir(count);
			startMove(oPicUl,{left: -moveWidth * (this.index)},function () {
				boolen = true;
			});
	}
}

function autoMove(demo){
	if (boolen) {
		boolen = false;
		if (demo == 1 || !demo) {
			count ++;
			if (count == (aLi.length/2) ){ //走完图片
				count = 0;
			}
			changeCir(count);
			startMove(oPicUl,{left: oPicUl.offsetLeft - moveWidth},function () {
				if (count == 0) {
					oPicUl.style.left = '0px';
				}
				boolen = true;
			});
		}else if (demo == -1) {
			if (oPicUl.offsetLeft == 0) {
				oPicUl.style.left = -moveWidth * realPicNum + 'px';
				count = realPicNum;	
			}
			count --;
			changeCir(count);
			startMove(oPicUl,{left: oPicUl.offsetLeft + moveWidth},function () {
				boolen = true;
			});
		}
	}
}

// circle
function changeCir(demo) {
	for (var i = 0; i < oILen; i ++) {
		oI[i].className = '';
	}
	oI[demo].className = 'cir-change';
}
 




