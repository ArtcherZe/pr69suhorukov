var n=1;
setInterval(function lol(){
	$("body").css("background-image", "url("+n+".gif")
	n++;
	if(n>4) n=1;
}, 650)
