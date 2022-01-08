    var bgColor1 = {r:201, g:144, b:139,a:0}//Из какого цвета
    var bgColor2 = {r:127,g:74,b:69,a:1}//В какой цвет

    window.onload = function(){
      window.dispatchEvent(new Event("scroll"));
    }
    window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
      )-innerHeight;//Получаем высоту видимой части окна

    var percent = scrollTop/scrollHeight;
    var color = {r:201,g:144,b:139,a:0};
    var color_shadow = {r:127,g:74,b:69};
    var tmp = Math.abs(bgColor1.r - bgColor2.r)*percent;
    color.r =  Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp: bgColor1.r + tmp);

    tmp = Math.abs(bgColor1.g - bgColor2.g)*percent;
    color.g =  Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp: bgColor1.g + tmp);

    tmp = Math.abs(bgColor1.b - bgColor2.b)*percent;
    color.b =  Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp: bgColor1.b + tmp);

    tmp = Math.abs(bgColor1.a - bgColor2.a)*percent;
    color.a =  Math.ceil(bgColor1.a > bgColor2.a ? bgColor1.a - tmp: bgColor1.a + tmp);

    document.getElementById("menu").style.background = "rgba("+color.r+","+color.g+","+color.b+","+color.a+")";});


    function myFunction() {
        var x = document.getElementById("menu");
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
    }


    /*var tmp = Math.abs(bgColor2.r - bgColor1.r)*percent;
    color_shadow.r =  Math.ceil(bgColor2.r > bgColor1.r ? bgColor2.r - tmp: bgColor2.r + tmp);

    tmp = Math.abs(bgColor2.g - bgColor1.g)*percent;
    color_shadow.g =  Math.ceil(bgColor2.g > bgColor1.g ? bgColor2.g - tmp: bgColor2.g + tmp);

    tmp = Math.abs(bgColor2.b - bgColor1.b)*percent;
    color_shadow.b =  Math.ceil(bgColor2.b > bgColor1.b ? bgColor2.b - tmp: bgColor2.b + tmp);

    document.getElementById("menu").style.text-shadow = "rgba("+color_shadow.r+","+color_shadow.g+","+color_shadow.b+")";});*/