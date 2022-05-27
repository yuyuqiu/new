// 注册js
(function () {
  'use strict';
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  
  $(".register").css("height", $(".container").height()+140);
  
  //随着屏幕的滚动
  $(window).resize(function () {
    var height = $(".container").height()+140;  
    $(".register").css("height", height);
  });
})()