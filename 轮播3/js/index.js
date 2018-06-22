
window.onload=function(){
   var oDiv = document.getElementById('roll');
   var oUl = oDiv.getElementsByTagName('ul')[0];
   var aLi = oUl.getElementsByTagName('li');
   var aBtn = oDiv.getElementsByTagName('span');
   var i = 0;
   var str = oUl.innerHTML + oUl.innerHTML;
   oUl.innerHTML = str;
   oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

   for (i = 0; i < aLi.length; i++) {
       aLi[i].onmouseover = function () {
           stopMove();
        };

       aLi[i].onmouseout = function () {
           startMove(MoveLeft);
         };
      }
       aBtn[0].onmouseover = function () {    
           startMove(true);
       };

       aBtn[1].onmouseover = function () {
           startMove(false);
       };

       startMove(true);
  /*轮播结束*/
}
