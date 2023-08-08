$(document).ready(function() {

  let prevUrl = '';
  let inactivitySwitch = 1;
  let inactivityLoop = 8000;
  inactivityLoop = 300;

  var inactivityTime = function () {
      var time;
      window.onload = resetTimer;
      // DOM Events
      document.addEventListener('onmousemove', resetTimer, true);
      document.addEventListener('onmousedown', resetTimer, true);

      document.addEventListener('onkeydown', resetTimer, true);

      document.addEventListener('ontouchstart', resetTimer, true);
      document.addEventListener('ontouchend', resetTimer, true);
      document.addEventListener('ontouchcancel', resetTimer, true);


      document.addEventListener('click', resetTimer, true);
      document.addEventListener('scroll', resetTimer, true);

      let form = document.querySelector('form');
      form.addEventListener('input', function (event) {
        console.log('form');
        inactivityLoop = 12000;
      });
      let boxes = Array.from(document.getElementsByClassName('el-select-dropdown__item'));
      boxes.forEach(box => {
        box.addEventListener('click', function handleClick(event) {
          console.log('select');
          inactivityLoop = 12000;
        });
      });

      function modalTrigger() {
          if(inactivitySwitch){
            inactivitySwitch = 0;
            console.log(inactivityLoop);
            showModal();
          }
      }
      function resetTimer() {
          clearTimeout(time);
          time = setTimeout(modalTrigger, inactivityLoop)
      }
  };

  const modalInterval = setInterval(modalTimer, 10);

  function modalTimer() {
    let currUrl = window.location.href;
    if (currUrl != prevUrl) {
      if(true || currUrl.indexOf('/pago') >= 0){
         if(true || prevUrl.indexOf('flujo-compra') >=0){
            inactivityTime();
            stopInterval(modalInterval);
         }
      }
      prevUrl = currUrl;
      console.log('URL changed: ' + currUrl);
    }
  }

  function stopInterval() {
    clearInterval(modalInterval);
  }

  function getCurrentURL () {
    return window.location.href
  }

  function showModal () {

   const url = getCurrentURL();
   console.log(url);

   document.addEventListener('click', function (event) {
     const elem = document.getElementById("modal-reserva");
     if (! (event.target.matches('#modaltext3') || event.target.matches('#modalclose')) ) return;
     var modalReserva = document.getElementById("modal-reserva");
     modalReserva.classList.remove("active");
   }, false);

   setTimeout(() => {
    var modalReserva = document.getElementById("modal-reserva");
    modalReserva.classList.add("active");

   }, 10);

  } // end showModal

}); //end ready