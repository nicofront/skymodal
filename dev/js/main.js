$(document).ready(function() {

  let prevUrl = '';
  let inactivitySwitch = 1;
  let inactivityLoop = 5000;
  // inactivityLoop = 300;

  // let brasil = ["Complete suas informações a seguir:", "Seu voo estará reservado e você poderá pagar quando quiser dentro do prazo que enviaremos para seu e-mail.", "Sim, quero garantir meu preço", "Você tem ", " para preencher seus dados e reservar seu voo", " (você pode pagar no prazo que enviaremos para seu e-mail)"]; 
  // let eng = ["Complete your information in the next:", "Your flight will be reserved and you can pay whenever you want within the period that we will send to your email.", "Yes, I want to guarantee my price", "You have ", " to complete your details and book your flight", " (you can pay in the term that we will send to your email)"]; 

  let brasil = ["Preencha os seus dados e garantimos o seu preço!", "Seu voo estará reservado e você poderá pagar quando quiser dentro do prazo que enviaremos para seu e-mail.", "Sim, quero garantir meu preço"]; 
  let eng = ["Complete your information and we guarantee your price!", "Your flight will be reserved and you can pay whenever you want within the period that we will send to your email.", "Yes, I want to guarantee my price"]; 

  let modal1, modal2, modal3, modal4, modal5, modal6;

  var target_date = 0; // set the countdown date
  var days, hours, minutes, seconds; // variables for time units

  window.tracking = function(category, action, label) {
    window.dataLayer = dataLayer || [];
    dataLayer.push({
      "event": "interacciones",
      "evento_interactivo_categoria": category,
      "evento_interactivo_accion": action,
      "evento_interactivo_etiqueta": label 
    });
  }

  function getCountdown(){
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    if(seconds_left <= 0) {
      seconds_left = 0;
      //window.location.href = "https://www.skyairline.com/chile";
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

    document.addEventListener('keydown', resetTimer, true);
    document.addEventListener('keyup', resetTimer, true);

    document.addEventListener('ontouchstart', resetTimer, true);
    document.addEventListener('ontouchend', resetTimer, true);
    document.addEventListener('ontouchcancel', resetTimer, true);

    document.addEventListener('click', resetTimer, true);
    document.addEventListener('scroll', resetTimer, true);

    // let form = document.querySelector('form');
    // form.addEventListener('input', function (event) {
    //   console.log('form');
    //   inactivityLoop = 15000;
    // });
    // let boxes = Array.from(document.getElementsByClassName('el-select-dropdown__item'));
    // boxes.forEach(box => {
    //   box.addEventListener('click', function handleClick(event) {
    //     console.log('select');
    //     inactivityLoop = 15000;
    //   });
    // });

    function modalTrigger() {
      if(inactivitySwitch){
        inactivitySwitch = 0;
        target_date = new Date().getTime() + (1000*60*5);
        // target_date = new Date().getTime() + (1000*60*500);
        //target date

        let htmljs = '';

        // htmljs += '<div class="modal" id="modal-reserva">';
        // htmljs += '<div class="modal-block">';
        // htmljs += '<div class="modal-block-head">';
        // htmljs += '<img id="modalclose" onclick="tracking(\'exp_rpp_v2\', \'click\', \'aceptar\')" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD/SURBVHgB7ZXNCYQwEIUnXvS4JaSFLcESPIonK/PoMSVsC5ZgCTagbLJkQZf8vAkKi+RBkETnfZO/kSgrK+sfNI6jNO2KGBEz0Y+X7dZt284EgNEYAZhIOzTHzLgxBeGSxti3nA4wCSGWqqoWnyG67HI3PNPPbDzgqSzLummaNDiSQCoYgkcS6HUbUsAwPJDA0YwBZsFjCXDBRpzTTvaQ9U6joug5YDbcznxwvVvXVXEr4al7TkAh2guaue86bdv2tMCvPt+hKxCFh+5x13WT7tapCbArnOtUo5UQhnMrV0oC8GmP3WMLOGzBKT8WY4IWkJSYoJlS6nF1TFbWvfUGSx2upCxfcswAAAAASUVORK5CYII=" alt="Close"></div><div class="modal-block-body">';
        // htmljs += '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAoCAYAAABaW2IIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAROSURBVHgBxVpLUuMwEO0Eis8uc4PMCRhOQHKCSTYUsAGfgMwJcE6QcIJkFnyKTcIJEm6QOcGYE0x2wAKY9wbJoyh2Ylu2eVUuR7Ks7uduSa1WKlIyRqNR7fn5+VulUvmOYv39/Z2/a7jXdBuUZyjPeX97e3vY3d2dttvtuaRERUrCzc1NA7dTKNwyiaTAcGNj4/Lw8HCW9IXCyYFUHbcBrobkgyGu7vHxcbCuYaHkbm9vz3HzV1kKlqS7Bbi027FtPYF1fRDsrmpQCDmOq5eXlwEUbC0J/CAzxrOHnZ2dcdxYosXVeGQfp1Ft8Gy8vb3txfWROzlFbELFLEXmqLsEoX7ayUG59hmuC/sZJx0QbEb1mSu5FcSmqPOSjJNViBu/cQQ3JUcoV1wgRmuBVEdygPo4TZD0xbAiZVI2frbN9qHlrq+vO/gC5+sEUNmTk5O+XQ+BFOZb1ZzVfCkANkGl2w9Tt6r+wYUUt/q6S7WzBfGZb1UXRoxg3/zQZl21Wr1QuvxDXm658AU5xo6OjnxJCCj0Wz4+HhFA8a9J3oOVOnh3T9QYVMsH3bPJcmg5Fe4E6y62MwVcXV1xjJ2ZdZw8pDx4annRaKho6L/llK/2JSXgCvY47brOimlAWSBD9wy9B2S5Lk6r4oDBYEA3OLOqh1IyEIj3Leu1uCw5kcPa0jDLEDAs02oanucxQLjXZY497jycyMnyYnovn4epWWDo50QOZPbMMvZeibcjeQOWGptl6FZ3ImdtMOef4ZIadE1r3O1tqjUmMcwIBZ2ZoVYgnwx4TqB1YrDBpaCepoOoCEUhdRogrv+7u7tvaXbcxruhDvQq1wklF5iBAZWCBSYkKI6oJolK4iIUy8ez5EV0P4zmA13OStDevTvt58yYkEQRT36RjFAB70SMYcI+EQE1k7oo0hp/NEHu8VyXglAoO2VUIBmh92qS0YIqLWHKnzuRg+BHs4y1piUOcCFob5Lxzi9Xy9kL54E4IitBleQNgRynW+AMS82iAlZxRBzB19fXXlR7I4EUYmtry41cTMDakRxgE+T4RuasHdN8IfXHAJ7JIuccitoYToyOSXg/r1CMVkGfvbj8pLLaQpQFl9znDLtpKKVzKCthRyggMYWAqcRs9V2hPlJ7RZOBLOo31EtHXhGKZ2/1seb0pGCojFvDrMPHDVPszjkUgl8Xs1nXEtJRwgvBilRioAu5ZpxhrVHE+cDaA4sMcnr8eGYdlyVESAvum2vG+enpycPAr1tbIV9NOrml00GsYdardPpSxi33gxAmjSBoYhHU8HH9TEtSncaeo8/OUnBc1kGIBgniqDfyCEthyPWRisURVYT4/kHcaWzpR1gmovL5Swqow0c9Ueklad2BJSewqDOLhXZSMIxzhFPJAWmOw0o78GfaHXszznCpSRqnsRyv08TvScngWMKs2sDPBsgyNVgztyuKCC/+TeOR4wox5SzLXzX+AuXEp9NJZDUeAAAAAElFTkSuQmCC" alt="Seats">';
        // htmljs += '<h3 id="modaltext1">Completa tus datos en los próximos:</h3><div id="countdown"><h4>';
        // htmljs += '<img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIbSURBVHgBpVY7UsMwEF2ZzMRlSmZozAkIJ8A+AcMJCCeAEmgiGkJJToA5AdwAcwJyA0QBQ5kyKYh4a6/AEfEnYWd2pEi7eqv16m0UbSDn2+exUuoQ0xgaWWt7vI61CeYTTO9vPm+yVb6K1hAARRjuBIgEZAqQKcaeAxZJoVcANhsBXu5c9u3CPsmhBgDjbrebaqOnXkAxdAjluQm2gqPr9+vJWoB8EABecjBF47Ab6jJQhY9mYM6AClTiQJVsPlEpTSKJ+w7Yf5WIOUWaWooDhZowDPc5yED23njRU+fk0pOuAuNDoVYOXxKxz9h/Npud8VpHNgZULW7vijaTE+grUnuKUQd1llz+VNwu86utrYhfxt+fC68WEFH1ZfpM/5Pcf/G16Hc4/xVGSeldGWoSRb2aXSNjFNDfYjHUBsDhBKp4Y5ZOL7YvjpvsO8jxbtWmPOQ8siqb0cfoEXZcGHeWbApQGn2O7j2z3J/fZO03BEs4hjios0PQKRXVSALq3zT3Z56tBWR24KgwjUu3bQOauPUS3Rkmko4sVjINohpTwRZM2kkTKM4yXqcYypinuZFpQEm38jsW1qEG0Ix+b8f2Aypup3mtFXl7nULDuZZ1dKR78/l8CPszaV/7jjjWak94uA8kbYcKqltiIAEaAIBpLPI7xVqALFIAGvpThTUNOIOebNyAPeAYwwAgewDpO2AMBhX6jDJ9rPqL8Q0l4SI9yeoEUAAAAABJRU5ErkJggg==" alt="Clock">';
        // htmljs += '<span class="cd-mobile" id="modaltext4">Tienes </span><span id="tiles">00:05:00</span><span class="cd-mobile" id="modaltext5"> para completar tus datos y reservar tu vuelo</span>';
        // htmljs += '<span class="cd-mobile cd-normal" id="modaltext6">(podrás pagar en el plazo que enviaremos a tu correo).</span></h4></div>';
        // htmljs += '<p id="modaltext2">Tu vuelo quedará reservado y podrás pagar cuando quieras en el plazo que enviaremos a tu correo.</p>';
        // htmljs += '<button class="button" id="modaltext3" onclick="tracking(\'exp_rpp_v2\', \'click\', \'aceptar\')">Si, quiero asegurar mi precio</button></div></div></div>';

        htmljs += '<div class="modal" id="modal-reserva">';
        htmljs += '<div class="modal-block">';
        htmljs += '<div class="modal-block-head">';
        htmljs += '<img id="modalclose" onclick="tracking(\'exp_rpp_v2\', \'click\', \'aceptar\')" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD/SURBVHgB7ZXNCYQwEIUnXvS4JaSFLcESPIonK/PoMSVsC5ZgCTagbLJkQZf8vAkKi+RBkETnfZO/kSgrK+sfNI6jNO2KGBEz0Y+X7dZt284EgNEYAZhIOzTHzLgxBeGSxti3nA4wCSGWqqoWnyG67HI3PNPPbDzgqSzLummaNDiSQCoYgkcS6HUbUsAwPJDA0YwBZsFjCXDBRpzTTvaQ9U6joug5YDbcznxwvVvXVXEr4al7TkAh2guaue86bdv2tMCvPt+hKxCFh+5x13WT7tapCbArnOtUo5UQhnMrV0oC8GmP3WMLOGzBKT8WY4IWkJSYoJlS6nF1TFbWvfUGSx2upCxfcswAAAAASUVORK5CYII=" alt="Close"></div><div class="modal-block-body">';
        htmljs += '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAoCAYAAABaW2IIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAROSURBVHgBxVpLUuMwEO0Eis8uc4PMCRhOQHKCSTYUsAGfgMwJcE6QcIJkFnyKTcIJEm6QOcGYE0x2wAKY9wbJoyh2Ylu2eVUuR7Ks7uduSa1WKlIyRqNR7fn5+VulUvmOYv39/Z2/a7jXdBuUZyjPeX97e3vY3d2dttvtuaRERUrCzc1NA7dTKNwyiaTAcGNj4/Lw8HCW9IXCyYFUHbcBrobkgyGu7vHxcbCuYaHkbm9vz3HzV1kKlqS7Bbi027FtPYF1fRDsrmpQCDmOq5eXlwEUbC0J/CAzxrOHnZ2dcdxYosXVeGQfp1Ft8Gy8vb3txfWROzlFbELFLEXmqLsEoX7ayUG59hmuC/sZJx0QbEb1mSu5FcSmqPOSjJNViBu/cQQ3JUcoV1wgRmuBVEdygPo4TZD0xbAiZVI2frbN9qHlrq+vO/gC5+sEUNmTk5O+XQ+BFOZb1ZzVfCkANkGl2w9Tt6r+wYUUt/q6S7WzBfGZb1UXRoxg3/zQZl21Wr1QuvxDXm658AU5xo6OjnxJCCj0Wz4+HhFA8a9J3oOVOnh3T9QYVMsH3bPJcmg5Fe4E6y62MwVcXV1xjJ2ZdZw8pDx4annRaKho6L/llK/2JSXgCvY47brOimlAWSBD9wy9B2S5Lk6r4oDBYEA3OLOqh1IyEIj3Leu1uCw5kcPa0jDLEDAs02oanucxQLjXZY497jycyMnyYnovn4epWWDo50QOZPbMMvZeibcjeQOWGptl6FZ3ImdtMOef4ZIadE1r3O1tqjUmMcwIBZ2ZoVYgnwx4TqB1YrDBpaCepoOoCEUhdRogrv+7u7tvaXbcxruhDvQq1wklF5iBAZWCBSYkKI6oJolK4iIUy8ez5EV0P4zmA13OStDevTvt58yYkEQRT36RjFAB70SMYcI+EQE1k7oo0hp/NEHu8VyXglAoO2VUIBmh92qS0YIqLWHKnzuRg+BHs4y1piUOcCFob5Lxzi9Xy9kL54E4IitBleQNgRynW+AMS82iAlZxRBzB19fXXlR7I4EUYmtry41cTMDakRxgE+T4RuasHdN8IfXHAJ7JIuccitoYToyOSXg/r1CMVkGfvbj8pLLaQpQFl9znDLtpKKVzKCthRyggMYWAqcRs9V2hPlJ7RZOBLOo31EtHXhGKZ2/1seb0pGCojFvDrMPHDVPszjkUgl8Xs1nXEtJRwgvBilRioAu5ZpxhrVHE+cDaA4sMcnr8eGYdlyVESAvum2vG+enpycPAr1tbIV9NOrml00GsYdardPpSxi33gxAmjSBoYhHU8HH9TEtSncaeo8/OUnBc1kGIBgniqDfyCEthyPWRisURVYT4/kHcaWzpR1gmovL5Swqow0c9Ueklad2BJSewqDOLhXZSMIxzhFPJAWmOw0o78GfaHXszznCpSRqnsRyv08TvScngWMKs2sDPBsgyNVgztyuKCC/+TeOR4wox5SzLXzX+AuXEp9NJZDUeAAAAAElFTkSuQmCC" alt="Seats">';
        htmljs += '<h3 id="modaltext1">¡Completa tus datos y aseguramos tu precio!</h3>';
        htmljs += '<p id="modaltext2">Tu vuelo quedará reservado y podrás pagar cuando quieras en el plazo que enviaremos a tu correo.</p>';
        htmljs += '<button class="button" id="modaltext3" onclick="tracking(\'exp_rpp_v2\', \'click\', \'aceptar\')">Si, quiero asegurar mi precio</button></div></div></div>';

        document.body.innerHTML += htmljs;

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

   let currUrl = window.location.href;
   // if(currUrl.indexOf("brasil") >= 0){
   //  modal1 = document.getElementById('modaltext1');
   //  modal2 = document.getElementById('modaltext2');
   //  modal3 = document.getElementById('modaltext3');
   //  modal4 = document.getElementById('modaltext4');
   //  modal5 = document.getElementById('modaltext5');
   //  modal6 = document.getElementById('modaltext6');
   //  modal1.innerHTML = brasil[0];
   //  modal2.innerHTML = brasil[1];
   //  modal3.innerHTML = brasil[2];
   //  modal4.innerHTML = brasil[3];
   //  modal5.innerHTML = brasil[4];
   //  modal6.innerHTML = brasil[5];
   // }

   // if(currUrl.indexOf("english") >= 0){
   //  modal1 = document.getElementById('modaltext1');
   //  modal2 = document.getElementById('modaltext2');
   //  modal3 = document.getElementById('modaltext3');
   //  modal4 = document.getElementById('modaltext4');
   //  modal5 = document.getElementById('modaltext5');
   //  modal6 = document.getElementById('modaltext6');
   //  modal1.innerHTML = eng[0];
   //  modal2.innerHTML = eng[1];
   //  modal3.innerHTML = eng[2];
   //  modal4.innerHTML = eng[3];
   //  modal5.innerHTML = eng[4];
   //  modal6.innerHTML = eng[5];
   // }

   if(currUrl.indexOf("brasil") >= 0){
    modal1 = document.getElementById('modaltext1');
    modal2 = document.getElementById('modaltext2');
    modal3 = document.getElementById('modaltext3');
    modal1.innerHTML = brasil[0];
    modal2.innerHTML = brasil[1];
    modal3.innerHTML = brasil[2];
   }

   if(currUrl.indexOf("english") >= 0){
    modal1 = document.getElementById('modaltext1');
    modal2 = document.getElementById('modaltext2');
    modal3 = document.getElementById('modaltext3');
    modal1.innerHTML = eng[0];
    modal2.innerHTML = eng[1];
    modal3.innerHTML = eng[2];
   }

   setInterval(function () { getCountdown(); }, 1000);

   document.addEventListener('click', function (event) {

     const elem = document.getElementById("modal-reserva");
     if (! (event.target.matches('#modaltext3') || event.target.matches('#modalclose')) ) return;
     var modalReserva = document.getElementById("modal-reserva");
     
    modalReserva.classList.remove("active");
    // modalReserva.classList.add("change");
    // var header = document.getElementsByClassName("sticky-header"); 
    // console.log(header[0]);
    // header[0].appendChild(modalReserva);

   }, false);

   setTimeout(() => {
    var modalReserva = document.getElementById("modal-reserva");
    modalReserva.classList.add("active");
   }, 10);

  } // end showModal

}); //end ready