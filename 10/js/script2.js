$(document).ready(init);
/* Функции для примеров к уроку jqueri10 */
function init()
{
  var initialValue = $("#les10_ex3")[0].offsetLeft;
  console.log($("#les10_ex3")[0].offsetLeft);
  //настроим слайдер
  $("#les10_ex3").draggable({
    //ограничим перемещение родительским контейнером
      containment:'parent',
      //ограничим перемещение одной осью
      axis: "x",
      //зададим обработчик события перемещения слайдера
      drag: function( event, ui ) 
      {
        console.log(ui.offset.left);
        //выведем рассчитанное значение
        $("#sliderValue").text("Площадь " + (ui.offset.left) 
        + " кв. м., необходимо краски: " + (ui.offset.left * 0.25) + " литров");
      }
  });
}



