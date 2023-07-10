$(document).ready(function() {

  let prevUrl = '';
  let inactivitySwitch = 1;
  let inactivityLoop = 8000;

  var inactivityTime = function () {
      var time;
      window.onload = resetTimer;
      // DOM Events
      document.onmousemove = resetTimer;
      document.onmousedown = resetTimer;
      document.onkeydown = resetTimer;
      document.ontouchstart = resetTimer;
      document.onclick = resetTimer;
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
   var brasil = ["Reserve seus assentos", "Reserve seu voo", "Você selecionou um preço único, preencha o formulário para manter sua cotação, caso contrário, existe a possibilidade de não ver o mesmo preço novamente.", "Aceitar"]; 
   var eng = ["Reserve your seats", "Book your flight", "You have selected a unique price, please fill out the form to hold your quote, otherwise, there is a possibility that you may not see the same price again.", "Accept"]; 

   const url = getCurrentURL();
   console.log(url);
   console.log("Chile " + url.indexOf("chile"));
   console.log("Brasil " + url.indexOf("brasil"));
   console.log("ENG " + url.indexOf("eng"));

   document.addEventListener('click', function (event) {
     const elem = document.getElementById("modal-reserva");
     if (! (event.target.matches('#modaltext3') || event.target.matches('#modalclose')) ) return;
     var modalReserva = document.getElementById("modal-reserva");
     modalReserva.classList.remove("active");
   }, false);

   setTimeout(() => {
    var modalReserva = document.getElementById("modal-reserva");
    modalReserva.classList.add("active");
    if(url.indexOf("brasil") >= 0){
      console.log('url brasil');
      var text0 = document.getElementById("modaltext0");
      var text1 = document.getElementById("modaltext1");
      var text2 = document.getElementById("modaltext2");
      var text3 = document.getElementById("modaltext3");   
      text0.textContent = brasil[0];
      text1.textContent = brasil[1];
      text2.textContent = brasil[2];
      text3.textContent = brasil[3];
    }
    if(url.indexOf("eng") >= 0){
      console.log('url eng');
      var text0 = document.getElementById("modaltext0");
      var text1 = document.getElementById("modaltext1");
      var text2 = document.getElementById("modaltext2");
      var text3 = document.getElementById("modaltext3");   
      text0.textContent = eng[0];
      text1.textContent = eng[1];
      text2.textContent = eng[2];
      text3.textContent = eng[3];
    }
   }, 10);

  } // end showModal

}); //end ready