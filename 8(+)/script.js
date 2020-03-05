function back()
{
	$("#les8_ex7").attr("src","sv_kletka.gif");
}

function next(les8_ex7)
{
	//var el = document.gerElementById(id)
	//var all = new Array();
	//all[0] = "./sv_shashka";
	//for (var i=0; i<3; i++)
	//{
	//	if (el.src == all[i])
	//	{
	//		num == i;
	//		break;
	//	}
	//}
	//num++;
	//el.src = all[num];

	$("#les8_ex7").attr("src","tem_kletka.gif");
}

function um()
{
	$('#les8_ex7').animate({
          width:"100px",
          height:"100px"
      }, 3000 );
}

function uv()
{
	      $('#les8_ex7').animate({
          width:"400px",
          height:"400px"
      }, 3000 );

}

function d1(){
      $('#faq1').slideToggle(1000)
}

function d2(){
      $('#faq2').slideToggle(1000)
}

function d3(){
      $('#faq3').slideToggle(1000)
}

function openas(){
   //$(document).find('.d1').click();
   $('#faq1').slideToggle(1000);
   $('#faq2').slideToggle(1000);
   $('#faq3').slideToggle(1000)
}



