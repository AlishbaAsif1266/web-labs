$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});

$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide();
  });
});