/*
2014-12-15
cuitianze
*/
// window.onload = function () {
// 	var uMenu = document.getElementById("mainMenu");
// 	var aLink = uMenu.getElementsByTagName("a");
// 	var aWidth = [];

// 	for (var i = 0; i < aLink.length; i++) {
// 		aWidth.push( aLink[i].getElementsByTagName("img")[0].offsetWidth );
// 		aLink[i].getElementsByTagName("img")[0].width = parseInt( aLink[i].getElementsByTagName("img")[0].offsetWidth / 2 );
// 	};

// 	uMenu.onmousemove = function () {
// 		var event = event || window.event;
// 		for (var i = 0; i < aLink.length; i++) {
// 			var a = event.clientX - aLink[i].getElementsByTagName("img")[0].offsetLeft - aLink[i].getElementsByTagName("img")[0].offsetWidth / 2;
// 			var b = event.clientY - aLink[i].getElementsByTagName("img")[0].offsetTop - aLink[i].getElementsByTagName("img")[0].offsetHeight /2;
// 			var iScale = 1 - Math.sqrt( a*a + b*b )/300;
// 			if(iScale<0.5) {
// 				iScale = 0.5;
// 			}
// 			aLink[i].getElementsByTagName("img")[0].width = aWidth[i] * iScale;
// 		};
// 	}

// }



