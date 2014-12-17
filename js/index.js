/*
2014-12-15
cuitianze
*/

window.onload = function () {
    var oMenu = document.getElementById("mainMenu");
    var aMenu = oMenu.getElementsByTagName("a");
    //console.log(aMenu);
    var aWidth = [], aHeight = [];
    var i = 0;
    //保存原宽度,设置当前宽度
    for (i = 0; i < aMenu.length; i++) {
        aWidth.push(aMenu[i].offsetWidth);
        aHeight.push(aMenu[i].offsetHeight);
        aMenu[i].style.width = parseInt(aMenu[i].offsetWidth / 2);
        aMenu[i].style.height = parseInt(aMenu[i].offsetHeight / 2);
        //console.log(aMenu[i].style.width);
    }
    //鼠标移动事件
    document.onmousemove = function (event) {
        //console.log(event);
        var event = event || window.event;
        for (i = 0; i < aMenu.length; i++)	{
            var a = event.clientX - aMenu[i].offsetLeft - aMenu[i].offsetWidth / 2;
            var b = event.clientY - aMenu[i].offsetTop - oMenu.offsetTop - aMenu[i].offsetHeight / 2;
            var iScale = 1 - Math.sqrt(a * a + b * b) / 300;
            if (iScale < 0.5) iScale = 0.5;
            aMenu[i].style.width = aWidth[i] * iScale;
            aMenu[i].style.height = aHeight[i] * iScale;
        }
    };
};


