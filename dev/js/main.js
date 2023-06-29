$(document).ready(function() {

     let brasil = ["Reserve seus assentos", "Reserve seus assentos", "Você selecionou um preço único, preencha o formulário para manter sua cotação, caso contrário, existe a possibilidade de não ver o mesmo preço novamente.", "Preencher"]; 
     let eng = ["Reserve your seats", "Reserve your seats", "You have selected a unique price, please fill out the form to hold your quote, otherwise, there is a possibility that you may not see the same price again.", "Fill out"]; 

     function getCurrentURL () {
       return window.location.href
     }

     // Example
     const url = getCurrentURL();
     console.log(url);
     console.log("Brasil " + url.indexOf("brasil"));
     console.log("ENG " + url.indexOf("eng"));

     if(url.indexOf("brasil") >= 0){
        $('#modaltext0').text(brasil[0]);
        $('#modaltext1').text(brasil[1]);
        $('#modaltext2').text(brasil[2]);
        $('#modaltext3').text(brasil[3]);
     }

     if(url.indexOf("eng") >= 0){
        $('#modaltext0').text(eng[0]);
        $('#modaltext1').text(eng[1]);
        $('#modaltext2').text(eng[2]);
        $('#modaltext3').text(eng[3]);
     }

}); //end ready