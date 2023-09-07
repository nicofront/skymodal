$(document).ready(function() {

  let prevUrl = '';
  let inactivitySwitch = 1;
  let inactivityLoop = 5000;

  // let brasil = ["Preencha os seus dados e garantimos o seu preço!", "Seu voo estará reservado e você poderá pagar quando quiser dentro do prazo que enviaremos para seu e-mail.", "Sim, quero garantir meu preço"]; 
  // let eng = ["Complete your information and we guarantee your price!", "Your flight will be reserved and you can pay whenever you want within the period that we will send to your email.", "Yes, I want to guarantee my price"]; 

  let brasil = ["Complete suas informações a seguir:", "Seu voo estará reservado e você poderá pagar quando quiser dentro do prazo que enviaremos para seu e-mail.", "Sim, quero garantir meu preço", "Você tem ", " para preencher seus dados e reservar seu voo", " (você pode pagar no prazo que enviaremos para seu e-mail)"]; 
  let eng = ["Complete your information in the next:", "Your flight will be reserved and you can pay whenever you want within the period that we will send to your email.", "Yes, I want to guarantee my price", "You have ", " to complete your details and book your flight", " (you can pay in the term that we will send to your email)"]; 

  let modal1, modal2, modal3, modal4, modal5, modal6;
  let clock;

  var target_date = 0; // set the countdown date
  var days, hours, minutes, seconds; // variables for time units

  function getCurrentURL () {
    return window.location.href;
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function getCountdown(){
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    var current_url = getCurrentURL();
    var modalDiv = document.getElementById("modal-reserva");

    if(seconds_left <= 0) {
      seconds_left = 0;
      if(current_url.endsWith('flujo-compra/pago')){
        window.location.href = "https://www.skyairline.com";
      }
    }
    if(!current_url.endsWith('flujo-compra/pago')){
      modalDiv.classList.remove("active");
      clearInterval(clock);
    }else{
      modalDiv.classList.add("active");
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

    function modalTrigger() {
      if(inactivitySwitch){
        inactivitySwitch = 0;
        showModal();
      }
    }
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(modalTrigger, inactivityLoop);
    }
  };

  inactivityTime();

  function showModal () {
   let currUrl = window.location.href;
   if(currUrl.indexOf("brasil") >= 0){
    modal1 = document.getElementById('modaltext1');
    modal2 = document.getElementById('modaltext2');
    modal3 = document.getElementById('modaltext3');
    modal4 = document.getElementById('modaltext4');
    modal5 = document.getElementById('modaltext5');
    modal6 = document.getElementById('modaltext6');
    modal1.innerHTML = brasil[0];
    modal2.innerHTML = brasil[1];
    modal3.innerHTML = brasil[2];
    modal4.innerHTML = brasil[3];
    modal5.innerHTML = brasil[4];
    modal6.innerHTML = brasil[5];
   }

   if(currUrl.indexOf("english") >= 0){
    modal1 = document.getElementById('modaltext1');
    modal2 = document.getElementById('modaltext2');
    modal3 = document.getElementById('modaltext3');
    modal4 = document.getElementById('modaltext4');
    modal5 = document.getElementById('modaltext5');
    modal6 = document.getElementById('modaltext6');
    modal1.innerHTML = eng[0];
    modal2.innerHTML = eng[1];
    modal3.innerHTML = eng[2];
    modal4.innerHTML = eng[3];
    modal5.innerHTML = eng[4];
    modal6.innerHTML = eng[5];
   }

   target_date = new Date().getTime() + (1000*60*5) + (1000*1);
   clock = setInterval(function () { getCountdown(); }, 1000);

   document.addEventListener('click', function (event) {
     const elem = document.getElementById("modal-reserva");
     if ( (event.target.matches('#modaltext3') || event.target.matches('#modalclose')) ){
      var modalReserva = document.getElementById("modal-reserva"); 
      modalReserva.classList.add("change");
      var header = document.getElementsByClassName("sticky-header"); 
      header[0].appendChild(modalReserva);
     }
   }, false);

   var modalReserva = document.getElementById("modal-reserva");
   modalReserva.classList.add("active");

  } // end showModal

}); //end ready