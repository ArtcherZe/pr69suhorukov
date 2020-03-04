$(document).ready(function(){
     $("img").mouseover(function(){$(this).css("opacity","1")});
   $("img").mouseout(function(){$(this).css("opacity","0.5")});
   
   $("#1").click(function(){ $("#1").height(400).width(400);});
  $("#1").dblclick(function(){ $("#1").height(200).width(200);});
  
   $("#2").click(function(){ $("#2").height(400).width(400);});
  $("#2").dblclick(function(){ $("#2").height(200).width(200);});
  
   $("#3").click(function(){ $("#3").height(400).width(400);});
  $("#3").dblclick(function(){ $("#3").height(200).width(200);});
  
   $("#4").click(function(){ $("#4").height(400).width(400);});
  $("#4").dblclick(function(){ $("#4").height(200).width(200);});
  



});


var i=4;
function SlideNext(){
	
	   $("img").mouseover(function(){$(this).css("opacity","1")});
   $("img").mouseout(function(){$(this).css("opacity","0.5")});
   
   $("#1").click(function(){ $("#1").height(400).width(400);});
  $("#1").dblclick(function(){ $("#1").height(200).width(200);});
  
   $("#2").click(function(){ $("#2").height(400).width(400);});
  $("#2").dblclick(function(){ $("#2").height(200).width(200);});
  
   $("#3").click(function(){ $("#3").height(400).width(400);});
  $("#3").dblclick(function(){ $("#3").height(200).width(200);});
  
   $("#4").click(function(){ $("#4").height(400).width(400);});
  $("#4").dblclick(function(){ $("#4").height(200).width(200);});
  


  i=$("img:last").attr("id");
  i++;
  if (i==5)
    i=1;
  $("img:last").after("<img src=./images/"+i+".jpg>");
  $("img:last").attr("class","cat");
  $("img:last").attr("id",i);
  $("img:first").remove();

  $("img").mouseover(function(){$(this).css("opacity","1")});
   $("img").mouseout(function(){$(this).css("opacity","0.7")});
  i++;
}

var j=4;
function SlidePrev(){
  j=$("img:first").attr("id");
  j--;
  if(j==0)
    j=4;
  $("img:first").before("<img src=./images/"+j+".jpg>");

  $("img:first").attr("class","cat");
  $("img:first").attr("id",j);
  
  $("id",j).click(function(){ $("id",j).height(400).width(400);});
  $("id",j).dblclick(function(){ $("id",j).height(200).width(200);});
  
  $("img:last").remove();
  $("img").mouseover(function(){$(this).css("opacity","1")});

   $("img").mouseout(function(){$(this).css("opacity","0.7")});
   
}
