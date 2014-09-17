$(document).ready(function(){

    var light = $(".transparencia, .box_principal");
    light.hide();
    $(".open_button").click(function(e){
        e.preventDefault();
        light.fadeIn();
    });
    $(".click").click(function(e){
        e.preventDefault();
        light.fadeOut();
    });
    var anchoVentana =$(window).width();
    var altoVentana = $(window).height();
    console.log(anchoVentana,altoVentana);
    var anchoModal = $(".box_principal").width();
    var altoModal = $(".box_principal").height();
    console.log(anchoModal, altoModal);
    var posicionSide = (anchoVentana-anchoModal)/2;
    console.log(posicionSide)
    var posicionHeight = (altoVentana-altoModal)/2;
    
    $(".box_principal").css("top",posicionHeight);
    $(".box_principal").css("left",posicionSide);
});


//Ocultar el Ul
//    $("ul").hide();
//    //Apuntar en el DOM click img
//    $(".pete").click(function(e){
//        e.preventDefault();
//        $("ul").slideToggle();
//    });
//
//
////    $(".FirstCont").prepend("<p>Ahhh sos normal?</p>");
//    $(".FirstCont").append("<p>Ahhh sos normal?</p>");




























