function getHeartPoint(t){var e=t/Math.PI,n=19.5*(16*Math.pow(Math.sin(e),3)),a=-20*(13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e));return new Array(offsetX+n,offsetY+a)}function startHeartAnimation(){var t=50,e=10,n=new Array,a=setInterval(function(){for(var t=getHeartPoint(e),o=!0,i=0;i<n.length;i++){var s=n[i],r=Math.sqrt(Math.pow(s[0]-t[0],2)+Math.pow(s[1]-t[1],2));if(r<1.3*Garden.options.bloomRadius.max){o=!1;break}}o&&(n.push(t),garden.createRandomBloom(t[0],t[1])),e>=30?(clearInterval(a),showMessages()):e+=.2},t)}function timeElapse(t){var e=Date(),n=(Date.parse(e)-Date.parse(t))/1e3,a=Math.floor(n/86400);n%=86400;var o=Math.floor(n/3600);o<10&&(o="0"+o),n%=3600;var i=Math.floor(n/60);i<10&&(i="0"+i),n%=60,n<10&&(n="0"+n);var s='<span class="digit">'+a+'</span> days <span class="digit">'+o+'</span> hours <span class="digit">'+i+'</span> minutes <span class="digit">'+n+"</span> seconds";$("#elapseClock").html(s)}function showMessages(){adjustWordsPosition(),$("#messages").fadeIn(5e3,function(){showLoveU()})}function adjustWordsPosition(){$("#words").css("position","absolute"),$("#words").css("top",$("#garden").position().top+195),$("#words").css("left",$("#garden").position().left+70)}function adjustCodePosition(){$("#code").css("margin-top",($("#garden").height()-$("#code").height())/2)}function showLoveU(){$("#loveu").fadeIn(3e3)}var $window=$(window),gardenCtx,gardenCanvas,$garden,garden,clientWidth=$(window).width(),clientHeight=$(window).height();$(function(){$loveHeart=$("#loveHeart");$loveHeart.width()/2,$loveHeart.height()/2-55;$garden=$("#garden"),gardenCanvas=$garden[0],gardenCanvas.width=$("#loveHeart").width(),gardenCanvas.height=$("#loveHeart").height(),gardenCtx=gardenCanvas.getContext("2d"),gardenCtx.globalCompositeOperation="lighter",garden=new Garden(gardenCtx,gardenCanvas),$("#content").css("width",$loveHeart.width()+$("#code").width()),$("#content").css("height",Math.max($loveHeart.height(),$("#code").height())),$("#content").css("margin-top",Math.max(($window.height()-$("#content").height())/2,10)),$("#content").css("margin-left",Math.max(($window.width()-$("#content").width())/2,10)),setInterval(function(){garden.render()},Garden.options.growSpeed)}),$(window).resize(function(){var t=$(window).width(),e=$(window).height();t!=clientWidth&&e!=clientHeight&&location.replace(location)}),function(t){t.fn.typewriter=function(){return this.each(function(){var e=t(this),n=e.html(),a=0;e.html("");var o=setInterval(function(){var t=n.substr(a,1);"<"==t?a=n.indexOf(">",a)+1:a++,e.html(n.substring(0,a)+(1&a?"_":"")),a>=n.length&&clearInterval(o)},75)}),this}}(jQuery);