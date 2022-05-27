//帮助js
$(document).ready(function () {
  const columnBotton = $(".columnBotton div");
  const columnDiv = $(".columnDiv ul");
  columnDiv.eq(0).css("display", "block");
  columnBotton.click(function (e) { 
    e.preventDefault();
    const index = $(this).index();
    $(this).addClass("action");
    $(this).siblings().removeClass("action");
    columnDiv.css("display", "none");
    columnDiv.eq(index).css("display", "block");
    
  });

})