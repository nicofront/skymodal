$(document).ready(function() {

  let prevUrl = '';
  let inactivitySwitch = 1;
  let inactivityLoop = 5000;
  // inactivityLoop = 300;

  var target_date = 0; // set the countdown date
  var days, hours, minutes, seconds; // variables for time units

  function getCountdown(){
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    if(seconds_left <= 0) {
      seconds_left = 0;
      window.location.href = "https://www.skyairline.com/chile";
    }

    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
       
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
        
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );

    var countdown = document.getElementById("tiles");
    // format countdown string + set tag value
    if(countdown){
      countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
    }
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

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
      inactivityLoop = 15000;
    });
    let boxes = Array.from(document.getElementsByClassName('el-select-dropdown__item'));
    boxes.forEach(box => {
      box.addEventListener('click', function handleClick(event) {
        console.log('select');
        inactivityLoop = 15000;
      });
    });

    function modalTrigger() {
      if(inactivitySwitch){
        inactivitySwitch = 0;
        target_date = new Date().getTime() + (1000*60*5);
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

   setInterval(function () { getCountdown(); }, 1000);

   document.addEventListener('click', function (event) {
     const elem = document.getElementById("modal-reserva");
     if (! (event.target.matches('#modaltext3') || event.target.matches('#modalclose')) ) return;
     var modalReserva = document.getElementById("modal-reserva");
     modalReserva.classList.add("change");
   }, false);

   setTimeout(() => {
    var modalReserva = document.getElementById("modal-reserva");
    modalReserva.classList.add("active");
   }, 10);

  } // end showModal

}); //end ready